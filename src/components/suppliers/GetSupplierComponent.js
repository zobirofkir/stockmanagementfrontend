import React from 'react';

const GetSupplierComponent = () => {
  const suppliers = [
    { name: 'Supplier A', email: 'supplierA@example.com', phone: '+1234567890' },
    { name: 'Supplier B', email: 'supplierB@example.com', phone: '+0987654321' },
    { name: 'Supplier C', email: 'supplierC@example.com', phone: '+1122334455' },
  ];

  return (
    <div className="p-4">
      {/* Table for larger screens */}
      <div className="hidden md:block">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                }
              >
                <td className="py-2 px-4">{supplier.name}</td>
                <td className="py-2 px-4">{supplier.email}</td>
                <td className="py-2 px-4">{supplier.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile screens */}
      <div className="block md:hidden">
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            className={
              `p-4 mb-4 border border-gray-300 rounded ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              }`
            }
          >
            <p className="font-semibold">Name: {supplier.name}</p>
            <p>Email: {supplier.email}</p>
            <p>Phone: {supplier.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetSupplierComponent;
