export interface Contributor {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  expertise: string[];
  totalNotes: number;
  averageRating: number;
  tokensEarned: number;
}

export interface Note {
  id: number;
  title: string;
  subject: string;
  rating: number;
  upvotes: number;
  price: number;
  previewUrl: string;
  contributor: Contributor;
}