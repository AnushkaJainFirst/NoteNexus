import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Star, ThumbsUp, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { ContributorBadge } from './ContributorBadge';
import { Note } from '@/types';

interface NoteCardProps extends Note {
  onPreview: () => void;
  onPurchase: () => void;
}

export function NoteCard({
  id,
  title,
  subject,
  rating,
  upvotes,
  price,
  contributor,
  onPreview,
  onPurchase,
}: NoteCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{subject}</p>
          <ContributorBadge contributor={contributor} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 text-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <ThumbsUp className="mr-1 h-4 w-4 text-blue-500" />
            <span>{upvotes}</span>
          </div>
          <div className="flex items-center">
            <Book className="mr-1 h-4 w-4 text-gray-500" />
            <span>{price} Tokens</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={onPreview}>
          Preview
        </Button>
        <Button onClick={onPurchase}>
          Purchase
        </Button>
        <Link to={`/review/${id}`} className="w-full mt-2">
          <Button variant="secondary" className="w-full">
            <MessageSquare className="mr-2 h-4 w-4" />
            Review & Earn
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}