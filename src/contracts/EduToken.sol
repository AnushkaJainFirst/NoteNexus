
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EduToken is ERC20, Ownable {
    constructor() ERC20("EduToken", "EDU") Ownable(msg.sender) {
        // Mint initial supply to the deployer
        _mint(msg.sender, 1000000 * 10 ** decimals());  // Mint 1 million EDU tokens to deployer's address
    }

    // Only the owner can mint new tokens
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
}
}
