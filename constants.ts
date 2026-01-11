import { Product, BlogPost } from './types';

export const STYLES = [
  { id: 'casual', label: 'Casual', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80' },
  { id: 'streetwear', label: 'Streetwear', image: 'https://images.unsplash.com/photo-1523396870717-816a21028c15?w=300&q=80' },
  { id: 'formal', label: 'Formal', image: 'https://images.unsplash.com/photo-1594938298603-c8148c47e356?w=300&q=80' },
  { id: 'classic', label: 'Classic', image: 'https://images.unsplash.com/photo-1534030347209-467a5b0dd3f6?w=300&q=80' },
  { id: 'minimal', label: 'Minimal', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&q=80' },
];

export const COLORS = [
  { id: 'black', hex: '#000000', name: 'Black' },
  { id: 'white', hex: '#FFFFFF', name: 'White' },
  { id: 'beige', hex: '#F5F5DC', name: 'Beige' },
  { id: 'navy', hex: '#000080', name: 'Navy' },
  { id: 'gray', hex: '#808080', name: 'Gray' },
  { id: 'olive', hex: '#808000', name: 'Olive' },
  { id: 'burgundy', hex: '#800020', name: 'Burgundy' },
  { id: 'pastel-blue', hex: '#AEC6CF', name: 'Pastel Blue' },
];

export const CONSTRAINTS = [
  'No crop tops',
  'Modest outfits',
  'Loose fit only',
  'No sleeveless',
  'Sustainable brands only',
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Oversized Beige Blazer',
    price: '$89.99',
    platform: 'Zara',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80',
  },
  {
    id: '2',
    name: 'Wide Leg Trousers',
    price: '$45.00',
    platform: 'Myntra',
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1509631179647-b849389274e6?w=500&q=80',
  },
  {
    id: '3',
    name: 'Minimalist White Sneakers',
    price: '$120.00',
    platform: 'Amazon',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1560769629-975e130098b6?w=500&q=80',
  },
  {
    id: '4',
    name: 'Silk Scarf',
    price: '$25.00',
    platform: 'Flipkart',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80',
  },
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Minimalist Wardrobes',
    description: 'How to build a capsule wardrobe that works for every season without clutter.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80',
  },
  {
    id: '2',
    title: 'Color Theory 101',
    description: 'Understanding which colors complement your skin tone and how to mix them.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&q=80',
  },
  {
    id: '3',
    title: 'Sustainable Fashion Trends 2024',
    description: 'Why fast fashion is out and high-quality staples are in.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&q=80',
  },
];