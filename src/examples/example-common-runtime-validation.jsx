// These common validation techniques (tho validation libraries are most common) are still 
// needed when using TypeScript! 
// These are runtime errors which TypeScript type checking is not present for
import usersData from "../pages/users.json";
import defaultValues from "../pages/defaults.json";
// One way to prevent property look up errors, at least for 1st child properties is to use a 
//default value. Usually this is initialized as an empty value for the expected data type. 
// Though more robust defensive coding would include default values for all the expected properties.
const UserCard = (user = defaultValues.user) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Address:</p>
      <ul>
        {/* ?. optional chaining is a repetitive but effective way to protect against missing data in 
        nested object properties. */}
        <li>Street: {user.address?.street}</li>
        <li>City: {user.address?.city}</li>
        <li>State: {user.address?.state}</li>
        <li>Zip code: {user.address?.zipCode}</li>
      </ul>
    </div>
  );
};

//TODO: Idea (maybe) to have a mix of built in HTML for validation and a JS function 
//validation to compare with the same safety and error messages 
const UserCardForm = (user = defaultValues.user) => {
  return (
    <form>
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
    </form>
  );
};
const UserCardList = ({ users }) => {
  // Checking if users is an array to prevent throwing an error
  // when we attempt to invoke the `map` method.
  if(!Array.isArray(users)){ 
  return (
    <div>
      {users.map((user) => (
        // Using optional chaining will pass down `undefined` as the value
        // for key instead of throwing a runtime error.
        // However, this simply moves the problem to UserCard which now has a 
        // prop `user` which is `undefined`
        <UserCard key={user?.email} user={user} /> 
      ))}
    </div>
  );
} // else UserCardList will implicitly return undefined
};

export default function Example() {
  return (
    <div>
      <h1>Users Page</h1>
      <UserCardList users={usersData} />
    </div>
  );
}
