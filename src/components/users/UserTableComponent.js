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
    {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      image: 'https://via.placeholder.com/150',
      role: 'Supplier',
    },
  ];

  const roleBadge = (role) => {
    switch (role) {
      case 'Admin':
        return 'bg-red-500 text-white';
      case 'User':
        return 'bg-blue-500 text-white';
      case 'Supplier':
        return 'bg-green-500 text-white'; 
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Mobile View: User info as a list */}
      <div className="block md:hidden">
        {users.map((user, index) => (
          <div key={index} className="mb-6 p-4 border rounded-lg shadow-md">
            <div className="flex items-center">
              <Image
                width={50}
                height={50}
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <span
                  className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${roleBadge(user.role)}`}
                >
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Large Screen View: Table */}
      <div className="hidden md:block">
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
                    <Image
                      width={50}
                      height={50}
                      src={user.image}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${roleBadge(user.role)}`}
                    >
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTableComponent;
