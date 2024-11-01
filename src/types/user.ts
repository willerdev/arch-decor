export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  // ... other user properties
}
