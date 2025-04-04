export interface Task {
  id: number;
  name: string;
  description?: string;
  priority: string;
  createdAt: Date;
  updatedAt: Date;
}
