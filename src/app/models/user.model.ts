export interface User {
  id?: number; 
  title :string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'Admin' | 'User';
}