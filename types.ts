export type BodyType = 'hourglass' | 'rectangular' | 'inverted-triangle' | 'pear' | 'apple';

export interface UserProfile {
  name: string;
  email: string;
  gender?: string;
  height?: string;
  bodyType?: BodyType;
  styles: string[];
  colors: string[];
  avoidColors: string[];
  constraints: string[];
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  platform: 'Amazon' | 'Myntra' | 'Flipkart' | 'Zara';
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}