'use client';

import { useForm } from 'react-hook-form';
import { CreateTask } from '../types/task';
import { createTask } from '../actions/create-task';

const userId = '53a9ffc3-114b-49b5-a15e-69a5c7f9dee5';

export function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTask>();

  const onSubmit = handleSubmit(
    async (data) =>
      await createTask({
        ...data,
        userId,
      })
  );

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-4">
      <input {...register('name')} className="border border-black" />
      {errors.name && <p>Name is required</p>}

      <input {...register('description')} className="border border-black" />

      <select {...register('priority')} className="border border-black">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
