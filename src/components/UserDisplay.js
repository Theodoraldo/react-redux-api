import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomUser } from '../redux/feature/usersSlice';

const UserDisplay = () => {
  const [users] = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>List of Users</h1>
      <button onClick={dispatch(fetchRandomUser())}></button>
      {
        users.map((user, index) => (
          <div key={index}>
            <p>
              {user.name.first} {user.name.last}
            </p>
          </div>
        ))
      }
    </div>
  );
};

export default UserDisplay;
