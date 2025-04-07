export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  tasks: Task[];
}

export type CreateUser = Pick<User, 'firstName' | 'lastName' | 'email'>;

export type UpdateUser = Pick<User, 'firstName' | 'lastName' | 'email'>;
