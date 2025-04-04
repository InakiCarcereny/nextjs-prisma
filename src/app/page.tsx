'use client';

// import { createTask } from './actions/create-task';

export default function Home() {
  const handleSubmit = async (formData: FormData) => {
    const title = formData.get('name');
    const description = formData.get('description');
    const priority = formData.get('priority');

    const task = {
      name: title,
      description,
      priority,
    };

    console.log(task);
    // await createTask(task);
  };

  return (
    <>
      <div>NextJS + Prisma + MySQL</div>

      <form action={handleSubmit}>
        <input type="text" name="name" placeholder="Task name" />
        <input type="text" name="description" placeholder="Task description" />
        <select name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Create task</button>
      </form>
    </>
  );
}
