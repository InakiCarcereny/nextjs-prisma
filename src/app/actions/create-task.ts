'use server';

import { prisma } from '../lib/prisma';
import { Task } from '../types/task';

export async function createTask(task: Task) {
  await prisma.task.create({
    data: {
      name: task.name,
      description: task.description,
      priority: task.priority,
    },
  });
}
