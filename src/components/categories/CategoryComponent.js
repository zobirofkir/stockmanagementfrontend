import React, { useState } from 'react';

const CategoryComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description });
    // Add form submission logic here
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create Category</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter category title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter category description"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CategoryComponent;
