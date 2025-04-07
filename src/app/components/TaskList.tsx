import { getTasks } from '../actions/create-task';
import { Task } from './Task';

export async function TaskList() {
  const allTasks = await getTasks();

  return (
    <ul>
      {allTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          priority={task.priority}
          userEmail={task.user.email}
        />
      ))}
    </ul>
  );
}
