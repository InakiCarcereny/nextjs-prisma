'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '../lib/prisma';
import { CreateTask } from '../types/task';

export async function createTask(task: CreateTask) {
  await prisma.task.create({
    data: {
      name: task.name,
      description: task.description,
      priority: task.priority,
      user: {
        connect: {
          id: task.userId,
        },
      },
    },
  });

  revalidatePath('/');
}

export async function getTasks() {
  const tasks = await prisma.task.findMany({
    include: {
      user: true,
    },
  });
  return tasks;
}

export async function deleteTask(id: number) {
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');
}
