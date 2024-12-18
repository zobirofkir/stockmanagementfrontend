import Image from 'next/image';
import React from 'react';

const TableComponent = () => {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      category: 'Category A',
      prix: 120,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      category: 'Category B',
      prix: 200,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      name: 'Product 3',
      category: 'Category A',
      prix: 150,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      name: 'Product 4',
      category: 'Category C',
      prix: 90,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:hidden block">
        {/* Mobile view: Cards */}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <Image
              width={150}
              height={150}
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="mt-2 text-xl font-bold">${product.prix}</p>
          </div>
        ))}
      </div>

      {/* Desktop/table view: Table */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white table-auto rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Image</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">
                  <Image
                    width={50}
                    height={50}
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">${product.prix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
