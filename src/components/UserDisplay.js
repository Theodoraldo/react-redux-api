import React from 'react';
import { useSelector } from 'react-redux';

const UserDisplay = () => {
  const users = useSelector((state) => state.users.users.results);

  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user, index) => (
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