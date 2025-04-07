export interface Task {
  id: number;
  name: string;
  description?: string;
  priority: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export type CreateTask = Pick<
  Task,
  'name' | 'description' | 'priority' | 'userId'
>;

export type UpdateTask = Pick<Task, 'name' | 'description' | 'priority'>;
