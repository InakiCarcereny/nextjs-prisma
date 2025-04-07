'use server';

import { prisma } from '../lib/prisma';
import { CreateUser, UpdateUser } from '../types/user';

export async function createUser(user: CreateUser) {
  console.log('creating user', user);

  await prisma.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });
}

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: {
      id,
    },
  });
}

export async function updateUser(id: string, user: UpdateUser) {
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });
}
