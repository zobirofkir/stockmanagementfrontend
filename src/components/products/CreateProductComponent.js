import React, { useState } from 'react'

const CreateProductComponent = () => {
  const [formData, setFormData] = useState({
    category_id: '',
    supplier_id: '',
    title: '',
    images: [],
    description: '',
    price: '',
    quantity: ''
  })

  const categories = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    { id: '3', name: 'Category 3' },
  ]

  const suppliers = [
    { id: '1', name: 'Supplier 1' },
    { id: '2', name: 'Supplier 2' },
    { id: '3', name: 'Supplier 3' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-4xl mt-20">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Create New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="category_id" className="block text-gray-700">Category</label>
          <select
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="supplier_id" className="block text-gray-700">Supplier</label>
          <select
            id="supplier_id"
            name="supplier_id"
            value={formData.supplier_id}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Supplier</option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="title" className="block text-gray-700">Product Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter product title"
            required
          />
        </div>

        <div>
          <label htmlFor="images" className="block text-gray-700">Product Images</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter product description"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter product price"
            required
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter product quantity"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/2 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateProductComponent
