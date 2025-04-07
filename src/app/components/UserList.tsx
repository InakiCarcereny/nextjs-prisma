import { getUsers } from '../actions/users';

export async function UserList() {
  const allUsers = await getUsers();

  return (
    <ul>
      {allUsers.map((user) => (
        <li key={user.id}>
          {user.firstName} - {user.lastName} - {user.id}
        </li>
      ))}
    </ul>
  );
}
