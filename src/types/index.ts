export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'portraits' | 'story-series' | 'body-painting' | 'other';
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  course?: string;
}

export interface CommunityProgram {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  date: string;
}