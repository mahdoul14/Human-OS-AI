
export type ThemeMode = 'human' | 'ai';

export interface OfferCard {
  title: string;
  category: 'Agency' | 'Academy';
  description: string;
  outcome: string;
  status: string;
  roi: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}
