import { User } from '../types/User';
import { Product } from '../types/Product';
import { Order } from '../types/Order';
import { Review } from '../types/Review';
import { SupportTicket, TicketMessage } from '../types/SupportTicket';
import { Category } from '../types/Category';
import { Subscription, PaymentHistory } from '../types/Subscription';

export const COLLECTIONS = {
  USERS: 'users' as const,
  PRODUCTS: 'products' as const,
  ORDERS: 'orders' as const,
  REVIEWS: 'reviews' as const,
  SUPPORT_TICKETS: 'support_tickets' as const,
  TICKET_MESSAGES: 'ticket_messages' as const,
  CATEGORIES: 'categories' as const,
  SUBSCRIPTIONS: 'subscriptions' as const,
  PAYMENT_HISTORY: 'payment_history' as const,
} as const;

export type Collections = {
  [COLLECTIONS.USERS]: User;
  [COLLECTIONS.PRODUCTS]: Product;
  [COLLECTIONS.ORDERS]: Order;
  [COLLECTIONS.REVIEWS]: Review;
  [COLLECTIONS.SUPPORT_TICKETS]: SupportTicket;
  [COLLECTIONS.TICKET_MESSAGES]: TicketMessage;
  [COLLECTIONS.CATEGORIES]: Category;
  [COLLECTIONS.SUBSCRIPTIONS]: Subscription;
  [COLLECTIONS.PAYMENT_HISTORY]: PaymentHistory;
};