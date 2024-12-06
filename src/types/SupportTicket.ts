export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TicketStatus = 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed';

export interface TicketMessage {
  id: string;
  ticketId: string;
  userId: string;
  isStaff: boolean;
  content: string;
  attachments?: string[];
  createdAt: Date;
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  description: string;
  category: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  lastMessageAt: Date;
  attachments?: string[];
  tags: string[];
  metadata: {
    browser?: string;
    os?: string;
    device?: string;
  };
  satisfaction?: {
    rating: number;
    feedback?: string;
    submittedAt: Date;
  };
}