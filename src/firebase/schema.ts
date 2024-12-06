import { COLLECTIONS } from './collections';

export const firestoreIndexes = {
  [COLLECTIONS.PRODUCTS]: [
    { fields: ['category', 'status', 'createdAt'] },
    { fields: ['status', 'ratings.average'] },
  ],
  [COLLECTIONS.ORDERS]: [
    { fields: ['userId', 'status', 'createdAt'] },
    { fields: ['status', 'createdAt'] },
  ],
  [COLLECTIONS.REVIEWS]: [
    { fields: ['productId', 'status', 'createdAt'] },
    { fields: ['userId', 'createdAt'] },
  ],
  [COLLECTIONS.SUPPORT_TICKETS]: [
    { fields: ['userId', 'status', 'createdAt'] },
    { fields: ['status', 'priority', 'lastMessageAt'] },
    { fields: ['assignedTo', 'status', 'priority'] },
  ],
  [COLLECTIONS.TICKET_MESSAGES]: [
    { fields: ['ticketId', 'createdAt'] },
  ],
  [COLLECTIONS.CATEGORIES]: [
    { fields: ['status', 'displayOrder'] },
    { fields: ['parentId', 'status', 'displayOrder'] },
  ],
  [COLLECTIONS.SUBSCRIPTIONS]: [
    { fields: ['userId', 'status', 'currentPeriod.end'] },
    { fields: ['planId', 'status', 'createdAt'] },
  ],
  [COLLECTIONS.PAYMENT_HISTORY]: [
    { fields: ['subscriptionId', 'paymentDate'] },
    { fields: ['userId', 'status', 'paymentDate'] },
  ],
};

export const firestoreRules = `
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Previous rules remain the same...

    // Subscription rules
    match /subscriptions/{subscriptionId} {
      allow read: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }

    // Payment History rules
    match /payment_history/{paymentId} {
      allow read: if request.auth != null && 
        get(/databases/$(database)/documents/subscriptions/$(resource.data.subscriptionId)).data.userId == request.auth.uid || 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}`;