import Image from 'next/image';
import React from 'react';

const GetUserComponent = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin', image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User', image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Mike Johnson', email: 'mikejohnson@example.com', role: 'Editor', image: 'https://via.placeholder.com/50' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Users List</h1>
      
      {/* Responsive table on larger screens, cards on mobile */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b border-gray-300">Image</th>
              <th className="px-4 py-2 text-left border-b border-gray-300">ID</th>
              <th className="px-4 py-2 text-left border-b border-gray-300">Name</th>
              <th className="px-4 py-2 text-left border-b border-gray-300">Email</th>
              <th className="px-4 py-2 text-left border-b border-gray-300">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2 border-b border-gray-300">
                  <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td className="px-4 py-2 border-b border-gray-300">{user.id}</td>
                <td className="px-4 py-2 border-b border-gray-300">{user.name}</td>
                <td className="px-4 py-2 border-b border-gray-300">{user.email}</td>
                <td className="px-4 py-2 border-b border-gray-300">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view (cards) */}
      <div className="sm:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image width={50} height={50} src={user.image} alt={user.name} className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">Role: {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetUserComponent;
