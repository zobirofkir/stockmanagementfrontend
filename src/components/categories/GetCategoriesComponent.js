import React from 'react';

const GetCategoriesComponent = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
      {/* Table for large screens */}
      <div className="hidden lg:block">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 mb-4">Category List</h2>
        <table className="w-full text-left table-auto bg-gray-50 rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4 font-medium text-sm">Title</th>
              <th className="p-4 font-medium text-sm">Description</th>
              <th className="p-4 font-medium text-sm">Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-gray-700">Category 1</td>
              <td className="p-4 text-gray-600">Description 1</td>
              <td className="p-4 text-gray-600">17/06/2024</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-gray-700">Category 2</td>
              <td className="p-4 text-gray-600">Description 2</td>
              <td className="p-4 text-gray-600">17/06/2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="block lg:hidden">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Categories</h2>
        <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto">

          <div className="mb-6 border-b pb-6">
            <h3 className="font-semibold text-xl text-gray-800">Category 1</h3>
            <p className="text-gray-600 mt-2"><span className="font-semibold text-green-600">Description 1</span></p>
            <p className="text-gray-600 mt-2"><span className="font-semibold text-green-600">17/06/2024</span></p>
          </div>

          <div className="mb-6 border-b pb-6">
            <h3 className="font-semibold text-xl text-gray-800">Category 2</h3>
            <p className="text-gray-600 mt-2"><span className="font-semibold text-green-600">Description 2</span></p>
            <p className="text-gray-600 mt-2"><span className="font-semibold text-green-600">17/06/2024</span></p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GetCategoriesComponent;
