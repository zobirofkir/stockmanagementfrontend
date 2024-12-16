import GetCategoriesAction from '@/redux/actions/categories/GetCategoriesAction';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UpdateCategoryComponent = () => {
  const dispatch = useDispatch();
  const { isLoading, categories, error } = useSelector((state) => state.getCategories);

  useEffect(() => {
    dispatch(GetCategoriesAction());
  }, [dispatch]);

  const handleUpdate = (categoryId) => {
    // Placeholder for update logic, e.g., navigating to an update form or triggering an action.
    console.log(`Update category with ID: ${categoryId}`);
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
      <div className="hidden lg:block">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Category List</h2>
        <table className="w-full text-left table-auto bg-gray-50 rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4 font-medium text-sm">Title</th>
              <th className="p-4 font-medium text-sm">Description</th>
              <th className="p-4 font-medium text-sm">Created At</th>
              <th className="p-4 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-600">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-red-600">{error}</td>
              </tr>
            ) : (
              categories?.map((category) => (
                <tr key={category.id} className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">{category.title.substring(0, 20)} ...</td>
                  <td className="p-4 text-gray-600">{category.description.substring(0, 10)} ...</td>
                  <td className="p-4 text-gray-600">{new Date(category.created_at).toLocaleDateString()}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleUpdate(category.id)}
                      className="bg-yellow-500 font-bold text-white px-4 py-2 rounded hover:bg-yellow-600 font-bold"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="block lg:hidden">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Categories</h2>
        <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto">
          {isLoading ? (
            <div className="text-center text-gray-600">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            categories?.map((category) => (
              <div key={category.id} className="mb-6 border-b pb-6">
                <h3 className="font-semibold text-xl text-gray-800 text-center">{category.title.substring(0, 20)}</h3>
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold text-gray-800 text-center">{category.description.substring(0, 10)} ...</span>
                </p>
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold text-green-600 text-center">{new Date(category.created_at).toLocaleDateString()}</span>
                </p>
                <div className="text-center mt-4">
                  <button
                    onClick={() => handleUpdate(category.id)}
                    className="bg-yellow-500 font-bold text-white px-4 py-2 rounded hover:bg-yellow-600 font-bold"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateCategoryComponent;
