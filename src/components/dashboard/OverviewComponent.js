import React, { useEffect, useState } from 'react'

const OverviewComponent = () => {

  const [products, setProducts] = useState(120);
  const [users, setUsers] = useState(350);
  const [categories, setCategories] = useState(15);
  const [orders, setOrders] = useState(200);

  useEffect(() => {
    setTimeout(() => {
      setProducts(120); 
      setUsers(350); 
      setCategories(15); 
      setOrders(200); 
    }, 500); 
  }, []);

  return (
    <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6 text-gray-700 animate__animated animate__fadeIn">
        Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Products Overview */}
        <div
            className="bg-blue-50 shadow-lg rounded-lg p-6 border border-blue-200 transform transition duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s"
        >
            <div className="flex items-center gap-4">
            <svg
                className="h-12 w-12 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M3 2a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V2zm2 1v14h12V3H5z"
                clipRule="evenodd"
                />
            </svg>
            <div>
                <h2 className="text-xl font-medium text-gray-600">Products</h2>
                <p className="text-2xl font-bold text-gray-900">{products} Products</p>
            </div>
            </div>
        </div>

        {/* Users Overview */}
        <div
            className="bg-green-50 shadow-lg rounded-lg p-6 border border-green-200 transform transition duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
        >
            <div className="flex items-center gap-4">
            <svg
                className="h-12 w-12 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M10 2a4 4 0 100 8 4 4 0 000-8zm0 10a6 6 0 016 6v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a6 6 0 016-6z"
                clipRule="evenodd"
                />
            </svg>
            <div>
                <h2 className="text-xl font-medium text-gray-600">Users</h2>
                <p className="text-2xl font-bold text-gray-900">{users} Users</p>
            </div>
            </div>
        </div>

        {/* Categories Overview */}
        <div
            className="bg-yellow-50 shadow-lg rounded-lg p-6 border border-yellow-200 transform transition duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
        >
            <div className="flex items-center gap-4">
            <svg
                className="h-12 w-12 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                clipRule="evenodd"
                />
            </svg>
            <div>
                <h2 className="text-xl font-medium text-gray-600">Categories</h2>
                <p className="text-2xl font-bold text-gray-900">{categories} Categories</p>
            </div>
            </div>
        </div>

        {/* Orders Overview */}
        <div
            className="bg-purple-50 shadow-lg rounded-lg p-6 border border-purple-200 transform transition duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-4s"
        >
            <div className="flex items-center gap-4">
            <svg
                className="h-12 w-12 text-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M10 2a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"
                clipRule="evenodd"
                />
            </svg>
            <div>
                <h2 className="text-xl font-medium text-gray-600">Orders</h2>
                <p className="text-2xl font-bold text-gray-900">{orders} Orders</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OverviewComponent