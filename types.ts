export enum Category {
  History = 'History',
  Technology = 'Technology',
  Politics = 'Political Issues',
  All = 'All'
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  date: string;
  category: Category;
  readTime: string;
  tags: string[];
  featuredImage?: string | null;
  views?: number;
  // Author information
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  authorBio?: string;
  // Nepali translations
  titleNe?: string;
  excerptNe?: string;
  contentNe?: string;
  tagsNe?: string[];
}