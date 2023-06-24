import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomUser } from '../redux/feature/usersSlice';


const UserDisplay = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchRandomUser());
  }, [dispatch]);

  return (
    <div>
      <h1>List of Users</h1>
      {isLoading && <div>Loading ........</div>}
      {error && <div>Ooops something happened whiles fetching </div>}
      {!isLoading
        &&
        <div>
          {users.map(user => (
            <div key={user.login.uuid}>
              <span>`{user.name.first}  {user.name.last}`</span>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default UserDisplay;
