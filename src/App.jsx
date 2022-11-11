import React from "react";
import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";

const users = [
  {
    name: "User1",
    id: 1,
  },
  {
    name: "User2",
    id: 2,
  },
  {
    name: "User3",
    id: 3,
  },
  {
    name: "User4",
    id: 4,
  },
  {
    name: "User5",
    id: 5,
  },
];

const MainPage = () => (
  <>
    <h1>Main Page</h1>
    <Link to="/users">Users list page</Link>
  </>
);

const UsersListPage = () => {
  return (
    <>
      <h1>Users Layout</h1>
      <Link to="/">Main Page</Link>
      <h1>Users List Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}/profile`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const UserPage = () => {
  const params = useParams();
  const { userId } = params;
  return (
    <>
      <h1>User Page</h1>
      <ul>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/profile/edit`}>Edit this user</Link>
        </li>
      </ul>
      <p>UserId: {userId}</p>
    </>
  );
};

const EditUserPage = () => {
  const params = useParams();
  const { userId } = params;
  return (
    <>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User Profile Page</Link>
        </li>
        <li>
          <Link to={`/users/${Number(userId) + 1}/profile`}>Another User</Link>
        </li>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
      </ul>
    </>
  );
};

const App = () => {
  return (
    <>
      <h1>App</h1>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/users" component={UsersListPage} />
        <Route exact path="/users/:userId/profile" component={UserPage} />
        <Route
          exact
          path="/users/:userId/profile/edit"
          component={EditUserPage}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
