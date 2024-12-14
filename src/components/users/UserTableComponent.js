import Image from 'next/image';
import React from 'react';

const UserTableComponent = () => {

  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      image: 'https://via.placeholder.com/150',
      role: 'Admin',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      image: 'https://via.placeholder.com/150',
      role: 'User',
    },
  ];

  return (
    <div className="container w-full max-w-full mx-auto p-6 md:block hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <Image width={50} height={50} src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
                </td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTableComponent;
