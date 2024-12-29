import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ReviewSlider } from '@/components/ReviewSlider';

const REVIEW_PARAMETERS = [
  {
    name: 'Helpfulness',
    emojis: ['🤔', '😊', '👍'],
  },
  {
    name: 'Relevance',
    emojis: ['❓', '✅', '🔍'],
  },
  {
    name: 'Accuracy',
    emojis: ['🔍', '✔️', '✅'],
  },
  {
    name: 'Presentation',
    emojis: ['📝', '📚', '✍️'],
  },
  {
    name: 'Comprehensiveness',
    emojis: ['🧩', '🔍', '✅'],
  },
];

export function ReviewPage() {
  const { id } = useParams();
  const [ratings, setRatings] = useState<Record<string, number>>(
    Object.fromEntries(REVIEW_PARAMETERS.map(param => [param.name, 50]))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting review for note', id, ratings);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Review & Earn Tokens</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {REVIEW_PARAMETERS.map((param) => (
              <ReviewSlider
                key={param.name}
                parameter={param.name}
                value={ratings[param.name]}
                onChange={(value) => setRatings(prev => ({ ...prev, [param.name]: value }))}
                emojis={param.emojis}
              />
            ))}
            <Button type="submit" className="w-full">
              Submit Review & Claim Tokens
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}