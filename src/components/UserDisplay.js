import React from 'react';
import { useSelector } from 'react-redux';

const UserDisplay = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  return (
    <div>
      <h1>List of Users</h1>
      {isLoading && <div>Loading ........</div>}
      {error && <div>Ooops something happened whiles fetching </div>}
      {(users.results).map((user, index) => (
        <div key={index}>
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserDisplay;
