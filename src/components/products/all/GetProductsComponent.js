import React from 'react';

const GetProductsComponent = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
      {/* Table for large screens */}
      <div className="hidden lg:block">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 mb-4">Product List</h2>
        <table className="w-full text-left table-auto bg-gray-50 rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4 font-medium text-sm">Product</th>
              <th className="p-4 font-medium text-sm">Category</th>
              <th className="p-4 font-medium text-sm">Price</th>
              <th className="p-4 font-medium text-sm">Quantity</th>
              <th className="p-4 font-medium text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-gray-700">Product 1</td>
              <td className="p-4 text-gray-600">Category 1</td>
              <td className="p-4 text-gray-600">$20.00</td>
              <td className="p-4 text-gray-600">10</td>
              <td className="p-4 text-gray-600">$200.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-gray-700">Product 2</td>
              <td className="p-4 text-gray-600">Category 2</td>
              <td className="p-4 text-gray-600">$15.00</td>
              <td className="p-4 text-gray-600">5</td>
              <td className="p-4 text-gray-600">$75.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="block lg:hidden">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Products</h2>
        <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto">

          <div className="mb-6 border-b pb-6">
            <h3 className="font-semibold text-xl text-gray-800">Product 1</h3>
            <p className="text-gray-600 mt-2">Price: <span className="font-semibold text-green-600">$20.00</span></p>
            <p className="text-gray-600">Quantity: <span className="font-semibold text-gray-800">1</span></p>
          </div>

          <div className="mb-6 border-b pb-6">
            <h3 className="font-semibold text-xl text-gray-800">Product 2</h3>
            <p className="text-gray-600 mt-2">Price: <span className="font-semibold text-green-600">$15.00</span></p>
            <p className="text-gray-600">Quantity: <span className="font-semibold text-gray-800">2</span></p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg text-gray-800 font-semibold">Total:</p>
            <p className="text-xl text-gray-900 font-bold">$50.00</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GetProductsComponent;
