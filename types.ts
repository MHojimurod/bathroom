// Fix: Import `ReactNode` to resolve 'Cannot find namespace React' error.
import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface HeroSlide {
  image: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
}

export interface Achievement {
  value: number;
  label: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  subcategories: string[];
}

export interface Specification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: string;
  subcategory: string;
  price?: string;
  features: string[];
  specifications: Specification[];
}

export interface SocialLink {
  name: string;
  // Fix: Changed from `React.ReactNode` to `ReactNode` after import.
  icon: ReactNode;
  url: string;
}