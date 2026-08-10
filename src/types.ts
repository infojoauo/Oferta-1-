export interface CategoryItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PainPointItem {
  id: string;
  quote: string;
}

export interface FeatureBenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
}

export interface ResourceSampleItem {
  id: string;
  imageKey: string;
  title: string;
  category: string;
  description: string;
  sampleContent?: {
    subtitle: string;
    instructions: string;
    questions: string[];
  };
}

export interface TestimonialItem {
  id: string;
  initials: string;
  name: string;
  role: string;
  avatarUrl?: string;
  quote: string;
  country: string;
  flag: string;
  rating: number;
}

export interface TestimonialPlaceholder {
  id: string;
  placeholderText: string;
  author: string;
  country: string;
  rating: number;
}

export interface CountryFlag {
  code: string;
  name: string;
  flag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface HotmartConfig {
  basicOfferUrl: string;
  completeOfferUrl: string;
}
