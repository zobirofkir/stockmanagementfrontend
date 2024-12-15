import React from 'react';

const DeleteProductsComponent = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
      {/* Table for large screens */}
      <div className="hidden lg:block">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 mb-4">Delete Product</h2>
        <table className="w-full text-left table-auto bg-gray-50 rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4 font-medium text-sm">Product</th>
              <th className="p-4 font-medium text-sm">Category</th>
              <th className="p-4 font-medium text-sm">Price</th>
              <th className="p-4 font-medium text-sm">Quantity</th>
              <th className="p-4 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-gray-700">Product 1</td>
              <td className="p-4 text-gray-600">Category 1</td>
              <td className="p-4 text-gray-600">$20.00</td>
              <td className="p-4 text-gray-600">10</td>
              <td className="p-4 text-gray-600">
                <button className="text-red-600 hover:text-red-800 transition">Delete</button>
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-gray-700">Product 2</td>
              <td className="p-4 text-gray-600">Category 2</td>
              <td className="p-4 text-gray-600">$15.00</td>
              <td className="p-4 text-gray-600">5</td>
              <td className="p-4 text-gray-600">
                <button className="text-red-600 hover:text-red-800 transition">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="block lg:hidden">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Your Cart</h2>
        <div className="bg-gray-50 p-6 rounded-md shadow-sm">
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-700">Product 1</h3>
            <p className="text-gray-600">Price: <span className="font-semibold">$20.00</span></p>
            <p className="text-gray-600">Quantity: <span className="font-semibold">1</span></p>
            <button className="text-red-600 hover:text-red-800 transition mt-2">Delete</button>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-700">Product 2</h3>
            <p className="text-gray-600">Price: <span className="font-semibold">$15.00</span></p>
            <p className="text-gray-600">Quantity: <span className="font-semibold">2</span></p>
            <button className="text-red-600 hover:text-red-800 transition mt-2">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductsComponent;
