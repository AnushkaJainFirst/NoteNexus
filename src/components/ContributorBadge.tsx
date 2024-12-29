import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Contributor } from '@/types';

interface ContributorBadgeProps {
  contributor: Contributor;
}

export function ContributorBadge({ contributor }: ContributorBadgeProps) {
  return (
    <Link 
      to={`/contributor/${contributor.id}`}
      className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
    >
      {contributor.avatar ? (
        <img 
          src={contributor.avatar} 
          alt={contributor.name}
          className="w-6 h-6 rounded-full object-cover"
        />
      ) : (
        <User className="w-6 h-6" />
      )}
      <span className="font-medium">{contributor.name}</span>
    </Link>
  );
}