import React from 'react';
import { useParams } from 'react-router-dom';
import { Award, Book, Star, Coins } from 'lucide-react';
import { SAMPLE_NOTES } from '@/data/sampleData';

export function ContributorProfile() {
  const { id } = useParams();
  const contributor = SAMPLE_NOTES.find(note => 
    note.contributor.id === Number(id))?.contributor;

  if (!contributor) {
    return <div>Contributor not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="relative h-32 bg-gradient-to-r from-blue-500 to-blue-600">
            <div className="absolute -bottom-12 left-8">
              <img
                src={contributor.avatar}
                alt={contributor.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-16 px-8 pb-8">
            <h1 className="text-2xl font-bold text-gray-900">{contributor.name}</h1>
            <p className="mt-2 text-gray-600">{contributor.bio}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="flex items-center space-x-2">
                <Book className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="text-lg font-semibold">{contributor.totalNotes}</div>
                  <div className="text-sm text-gray-500">Notes Published</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="text-lg font-semibold">{contributor.averageRating}</div>
                  <div className="text-sm text-gray-500">Average Rating</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-lg font-semibold">{contributor.tokensEarned}</div>
                  <div className="text-sm text-gray-500">Tokens Earned</div>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-500" />
                Expertise
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {contributor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}