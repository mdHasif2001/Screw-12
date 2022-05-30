import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {
  const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user', {
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
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;