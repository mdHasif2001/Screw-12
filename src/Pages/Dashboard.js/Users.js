import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from '../Dashboard.js/UserRow';

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('services.json/user', {
    method: 'GET',
    headers: {
      authorization: `Beared ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className="text-3x">
        All Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map(user => <UserRow
                key={user._id}
                user={user}
                refetch={refetch}
              >
              </UserRow>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;