import UserCardList from "../components/UserCardList";
import usersData from "../data/users.json";

export default function UserPage() {
  return (
    <div>
      <h1>Users Page</h1>
      <UserCardList users={usersData} />
    </div>
  );
}
