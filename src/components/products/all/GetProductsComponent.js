import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetProductsAction from '@/redux/actions/products/GetProductsAction';
import Image from 'next/image';

const GetProductsComponent = () => {
  const dispatch = useDispatch();
  const { isLoading, productsGet, productsError } = useSelector((state) => state.getProducts);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(''); // Filter by category state

  useEffect(() => {
    dispatch(GetProductsAction());
  }, [dispatch]);

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
        <p className="text-center text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  // Error state
  if (productsError) {
    return (
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
        <p className="text-center text-xl text-red-500">Error loading products</p>
      </div>
    );
  }

  // Modal Functions
  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const goToPreviousImage = () => {
    if (selectedProduct.images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1));
    }
  };

  const goToNextImage = () => {
    if (selectedProduct.images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  // Filter products by selected category
  const filteredProducts = selectedCategory
    ? productsGet.filter((product) => product.category.title === selectedCategory)
    : productsGet;

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-20">
      <div className="hidden lg:block">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 mb-4">Product List</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold">Filter by Category</label>
          <div className="flex flex-row gap-4 items-center mt-4">
            <select
              id="category"
              className="p-2 border border-gray-300 rounded-md"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="">All Categories</option>
              {/* Assuming product categories are unique */}
              {[...new Set(productsGet.map((product) => product.category.title))].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <div>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={() => setSelectedCategory('')}
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>

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
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td
                  className="p-4 text-gray-700 cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  {product.title}
                </td>
                <td className="p-4 text-gray-600">{product.category.title}</td>
                <td className="p-4 text-gray-600">${product.price}</td>
                <td className="p-4 text-gray-600">{product.quantity}</td>
                <td className="p-4 text-gray-600">${(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Products</h2>
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto mb-6">
            <div className="mb-6 border-b pb-6">
              <h3 className="font-semibold text-xl text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mt-2">Price: <span className="font-semibold text-green-600">${product.price}</span></p>
              <p className="text-gray-600">Quantity: <span className="font-semibold text-gray-800">{product.quantity}</span></p>
            </div>
            <button
              className="text-gray-600 hover:underline"
              onClick={() => openModal(product)}
            >
              View Images
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Viewing Images */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative p-8 rounded-lg max-w-4xl w-full h-full max-h-full overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-400 transition duration-300"
            >
              ✕
            </button>

            <div className="flex justify-center items-center h-full space-x-4">
              {/* Previous Button */}
              <button
                onClick={goToPreviousImage}
                className="text-white bg-black p-4 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
              >
                ←
              </button>

              {/* Image Display */}
              <div className="relative w-full h-full flex justify-center">
                <Image
                  src={selectedProduct.images[currentImageIndex]}
                  alt={`Product Image ${currentImageIndex + 1}`}
                  width={800}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={goToNextImage}
                className="text-white bg-black p-4 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Total Calculation */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg text-gray-800 font-semibold">Total:</p>
        <p className="text-xl text-gray-900 font-bold">
          ${filteredProducts.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default GetProductsComponent;
