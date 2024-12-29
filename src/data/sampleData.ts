import { Note } from '@/types';

export const SAMPLE_NOTES: Note[] = [
  {
    id: 1,
    title: "Advanced Calculus Notes",
    subject: "Mathematics",
    rating: 4.8,
    upvotes: 156,
    price: 50,
    previewUrl: "#",
    contributor: {
      id: 1,
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Mathematics professor with 10+ years of teaching experience",
      expertise: ["Calculus", "Linear Algebra", "Real Analysis"],
      totalNotes: 25,
      averageRating: 4.9,
      tokensEarned: 2500
    }
  },
  {
    id: 2,
    title: "Organic Chemistry Complete Guide",
    subject: "Chemistry",
    rating: 4.6,
    upvotes: 98,
    price: 45,
    previewUrl: "#",
    contributor: {
      id: 2,
      name: "Prof. James Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Chemistry researcher specializing in organic synthesis",
      expertise: ["Organic Chemistry", "Biochemistry"],
      totalNotes: 18,
      averageRating: 4.7,
      tokensEarned: 1800
    }
  },
  {
    id: 3,
    title: "Computer Science Fundamentals",
    subject: "Computer Science",
    rating: 4.9,
    upvotes: 234,
    price: 60,
    previewUrl: "#",
    contributor: {
      id: 3,
      name: "Emily Zhang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Software engineer and CS educator",
      expertise: ["Algorithms", "Data Structures", "Web Development"],
      totalNotes: 32,
      averageRating: 4.8,
      tokensEarned: 3200
    }
  }
];