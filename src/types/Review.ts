export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
  status: 'pending' | 'approved' | 'rejected';
  helpful: {
    count: number;
    userIds: string[];
  };
  reply?: {
    content: string;
    createdAt: Date;
    adminId: string;
  };
}