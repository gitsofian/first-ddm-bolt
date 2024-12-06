export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
  role: 'user' | 'admin';
  settings: {
    notifications: boolean;
    theme: 'light' | 'dark' | 'system';
    language: string;
  };
  profile: {
    bio?: string;
    location?: string;
    website?: string;
    company?: string;
  };
}