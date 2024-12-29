
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./EduToken.sol";

contract NoteNexus is Ownable, ReentrancyGuard {
    EduToken public eduToken;
    
    struct Note {
        address author;
        string metadataURI;
        uint256 price;
        bool isActive;
        uint256 totalReviews;
        uint256 averageRating;
    }
    
    struct Review {
        address reviewer;
        uint256 rating;
        string comment;
        uint256 timestamp;
    }
    
    mapping(uint256 => Note) public notes;
    mapping(uint256 => mapping(address => bool)) public notePurchases;
    mapping(uint256 => mapping(uint256 => Review)) public noteReviews;
    mapping(address => bool) public premiumUsers;
    
    uint256 public noteCounter;
    uint256 public reviewRewardAmount = 1 * 10**18;
    uint256 public platformFee = 5;
    
    event NoteUploaded(uint256 indexed noteId, address indexed author, uint256 price);
    event NotePurchased(uint256 indexed noteId, address indexed buyer);
    event ReviewSubmitted(uint256 indexed noteId, address indexed reviewer, uint256 rating);
    
    constructor(address _eduTokenAddress) Ownable(msg.sender) {
        eduToken = EduToken(_eduTokenAddress);
    }
    
    function uploadNote(string memory _metadataURI, uint256 _price) external returns (uint256) {
        require(_price > 0, "Price must be greater than 0");
        
        noteCounter++;
        notes[noteCounter] = Note({
            author: msg.sender,
            metadataURI: _metadataURI,
            price: _price,
            isActive: true,
            totalReviews: 0,
            averageRating: 0
        });
        
        emit NoteUploaded(noteCounter, msg.sender, _price);
        return noteCounter;
    }
    
    function purchaseNote(uint256 _noteId) external nonReentrant {
        require(_noteId <= noteCounter, "Note does not exist");
        require(notes[_noteId].isActive, "Note is not active");
        require(!notePurchases[_noteId][msg.sender], "Already purchased");
        
        Note storage note = notes[_noteId];
        uint256 platformFeeAmount = (note.price * platformFee) / 100;
        uint256 authorAmount = note.price - platformFeeAmount;
        
        require(eduToken.transferFrom(msg.sender, note.author, authorAmount), "Token transfer failed");
        require(eduToken.transferFrom(msg.sender, address(this), platformFeeAmount), "Platform fee transfer failed");
        
        notePurchases[_noteId][msg.sender] = true;
        emit NotePurchased(_noteId, msg.sender);
    }
    
    function submitReview(uint256 _noteId, uint256 _rating, string memory _comment) external {
        require(notePurchases[_noteId][msg.sender], "Must purchase before reviewing");
        require(_rating >= 1 && _rating <= 5, "Invalid rating");
        
        Note storage note = notes[_noteId];
        note.totalReviews++;
        note.averageRating = ((note.averageRating * (note.totalReviews - 1)) + _rating) / note.totalReviews;
        
        noteReviews[_noteId][note.totalReviews] = Review({
            reviewer: msg.sender,
            rating: _rating,
            comment: _comment,
            timestamp: block.timestamp
        });
        
        eduToken.transfer(msg.sender, reviewRewardAmount);
        
        emit ReviewSubmitted(_noteId, msg.sender, _rating);
    }
}
