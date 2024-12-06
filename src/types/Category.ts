export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  image?: string;
  icon?: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'inactive';
  displayOrder: number;
  metadata: {
    productCount: number;
    featuredProducts: string[];
  };
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  customFields: Record<string, string>;
}