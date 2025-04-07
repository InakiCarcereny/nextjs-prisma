'use client';

import { useForm } from 'react-hook-form';
import { createUser } from '../actions/users';
import { CreateUser } from '../types/user';

export function UsersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUser>();

  const onSubmit = handleSubmit(async (data) => await createUser(data));

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-4">
      <input {...register('firstName')} className="border border-black" />
      {errors.firstName && <p>First name is required</p>}

      <input {...register('lastName')} className="border border-black" />
      {errors.lastName && <p>Last name is required</p>}

      <input {...register('email')} className="border border-black" />
      {errors.email && <p>Email is required</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
