'use client';

import { deleteTask } from '../actions/create-task';

interface TaskProps {
  id: number;
  name: string;
  description?: string | null;
  priority: string;
  userEmail: string;
}

export function Task({
  name,
  description,
  priority,
  id,
  userEmail,
}: TaskProps) {
  return (
    <li className="flex items-center gap-2">
      <h3>{name}</h3>
      <p>{description}.</p>
      <p>{priority}</p>
      <span>{id}</span>
      <span>{userEmail}</span>
      <button
        onClick={() => deleteTask(id)}
        className="bg-red-500 rounded-lg text-white px-4 py-2"
      >
        Delete
      </button>
    </li>
  );
}
