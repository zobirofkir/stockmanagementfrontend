import React, { useState } from 'react';
import ModalComponent from '../modal/ModalComponent';

const products = [
  { id: '1', name: 'Product A' },
  { id: '2', name: 'Product B' },
  { id: '3', name: 'Product C' }
];

const suppliers = [
  { id: '1', name: 'Supplier X' },
  { id: '2', name: 'Supplier Y' },
  { id: '3', name: 'Supplier Z' }
];

const CreateStockComponent = () => {
  const [formData, setFormData] = useState({
    product_name: '',
    supplier_name: '',
    quantity: '',
    credit: ''
  });

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const openProductModal = () => {
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
  };

  const openSupplierModal = () => {
    setIsSupplierModalOpen(true);
  };

  const closeSupplierModal = () => {
    setIsSupplierModalOpen(false);
  };

  const selectProduct = (product) => {
    setFormData({
      ...formData,
      product_name: product.name
    });
    closeProductModal();
  };

  const selectSupplier = (supplier) => {
    setFormData({
      ...formData,
      supplier_name: supplier.name
    });
    closeSupplierModal();
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Stock Entry</h2>
          <p className="text-gray-600 mt-2">Enter the details to create a new stock entry.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="product_name" className="block text-gray-700 font-medium mb-2">Product</label>
              <div className="relative">
                <input
                  type="text"
                  id="product_name"
                  name="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                  readOnly
                />
                <button
                  type="button"
                  onClick={openProductModal}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  Select Product
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="supplier_name" className="block text-gray-700 font-medium mb-2">Supplier</label>
              <div className="relative">
                <input
                  type="text"
                  id="supplier_name"
                  name="supplier_name"
                  value={formData.supplier_name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                  readOnly
                />
                <button
                  type="button"
                  onClick={openSupplierModal}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  Select Supplier
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            <div>
              <label htmlFor="credit" className="block text-gray-700 font-medium mb-2">Credit (Optional)</label>
              <input
                type="number"
                id="credit"
                name="credit"
                value={formData.credit}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Create Stock Entry
            </button>
          </div>
        </form>
      </div>

      <ModalComponent
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
        title="Select Product"
      >
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id}>
              <button
                onClick={() => selectProduct(product)}
                className="w-full text-left p-3 border border-gray-300 rounded-md hover:bg-gray-500 hover:text-white"
              >
                {product.name}
              </button>
            </li>
          ))}
        </ul>

        <button className='text-left mt-4 p-3 border border-gray-300 rounded-md hover:bg-gray-500 hover:text-white bg-gray-600 text-center py-2 px-4 text-white font-bold'>
            Select
        </button>
      </ModalComponent>

      <ModalComponent
        isOpen={isSupplierModalOpen}
        onClose={closeSupplierModal}
        title="Select Supplier"
      >
        <ul className="space-y-4">
          {suppliers.map((supplier) => (
            <li key={supplier.id}>
              <button
                onClick={() => selectSupplier(supplier)}
                className="w-full text-left mb-4 p-3 border border-gray-300 rounded-md hover:bg-gray-500 hover:text-white"
              >
                {supplier.name}
              </button>
            </li>
          ))}
        </ul>

        <button className='text-left p-3 border border-gray-300 rounded-md hover:bg-gray-500 hover:text-white bg-gray-600 text-center py-2 px-4 text-white font-bold'>
            Select
        </button>
      </ModalComponent>
    </div>
  );
};

export default CreateStockComponent;
