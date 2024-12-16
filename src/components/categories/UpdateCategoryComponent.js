import GetCategoriesAction from '@/redux/actions/categories/GetCategoriesAction';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../modal/ModalComponent';

const UpdateCategoryComponent = () => {
  const dispatch = useDispatch();
  const { isLoading, categories, error } = useSelector((state) => state.getCategories);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    dispatch(GetCategoriesAction());
  }, [dispatch]);

  const openModal = (category) => {
    setSelectedCategory(category);
    setFormData({ title: category.title, description: category.description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    setFormData({ title: '', description: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = () => {
    console.log('Updating category:', selectedCategory.id, formData);
    closeModal();
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
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
                    onClick={() => openModal(category)}
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

      <ModalComponent isOpen={isModalOpen} onClose={closeModal} title="Update Category">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-200 font-bold"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-200 font-bold"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateSubmit}
            className="bg-yellow-500 font-bold text-white px-4 py-2 rounded hover:bg-yellow-600 font-bold"
          >
            Save
          </button>
        </div>
      </ModalComponent>
    </div>
  );
};

export default UpdateCategoryComponent;
