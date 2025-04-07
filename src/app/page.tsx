import { Suspense } from 'react';
import { UserList } from './components/UserList';
import { UsersForm } from './components/UsersForm';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Hello Prisma</h1>

      <UsersForm />

      <Suspense fallback={<div>Loading...</div>}>
        <UserList />
      </Suspense>

      <TaskForm />

      <Suspense fallback={<div>Loading...</div>}>
        <TaskList />
      </Suspense>
    </div>
  );
}
