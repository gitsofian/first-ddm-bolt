export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing' | 'paused';
export type BillingInterval = 'monthly' | 'quarterly' | 'annual';

export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'paypal' | 'bank_transfer';
  isDefault: boolean;
  details: {
    last4?: string;
    brand?: string;
    expiryMonth?: number;
    expiryYear?: number;
    paypalEmail?: string;
    bankName?: string;
    bankAccountLast4?: string;
  };
  billingAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentHistory {
  id: string;
  subscriptionId: string;
  amount: number;
  currency: string;
  status: 'succeeded' | 'failed' | 'pending' | 'refunded';
  paymentMethodId: string;
  paymentDate: Date;
  billingPeriod: {
    start: Date;
    end: Date;
  };
  invoice?: {
    number: string;
    url: string;
  };
  metadata: {
    failureReason?: string;
    refundReason?: string;
    transactionId: string;
  };
}

export interface UsageMetrics {
  period: {
    start: Date;
    end: Date;
  };
  metrics: {
    apiCalls: number;
    storageUsed: number;
    bandwidthUsed: number;
    activeUsers: number;
    customMetrics: Record<string, number>;
  };
  limits: {
    apiCalls: number;
    storage: number;
    bandwidth: number;
    activeUsers: number;
    customLimits: Record<string, number>;
  };
}

export interface Subscription {
  id: string;
  userId: string;
  status: SubscriptionStatus;
  planId: string;
  planDetails: {
    name: string;
    description: string;
    features: string[];
    price: number;
    currency: string;
    billingInterval: BillingInterval;
    trialDays?: number;
  };
  currentPeriod: {
    start: Date;
    end: Date;
  };
  paymentMethods: PaymentMethod[];
  defaultPaymentMethodId: string;
  cancelation?: {
    date: Date;
    reason: string;
    feedback?: string;
    effectiveDate: Date;
  };
  usage: UsageMetrics;
  metadata: {
    promotionCode?: string;
    referralCode?: string;
    customData: Record<string, any>;
  };
  createdAt: Date;
  updatedAt: Date;
}