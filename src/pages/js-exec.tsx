import usersData from "../data/users.json";

const UserCard = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Address:</p>
      <ul>
        <li>Street: {user.address.street}</li>
        <li>City: {user.address.city}</li>
        <li>State: {user.address.state}</li>
        <li>Zip code: {user.address.zipCode}</li>
      </ul>
    </div>
  );
};

const UserCardList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.email} user={user} />
      ))}
    </div>
  );
};

export default function Example() {
  return (
    <div>
      <h1>Users Page</h1>
      <UserCardList users={usersData} />
    </div>
  );
}
