import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomUser } from '../redux/feature/usersSlice';

const UserDisplay = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  return (
    <div>
      <h1>List of Users</h1>
      {users.results.map((user, index) => (
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
