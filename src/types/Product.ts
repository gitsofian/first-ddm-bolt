export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  tags: string[];
  features: string[];
  specifications: Record<string, string>;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'draft' | 'archived';
  ratings: {
    average: number;
    count: number;
  };
}