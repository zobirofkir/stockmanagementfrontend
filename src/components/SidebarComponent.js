"use client";

import React, { useState } from 'react';
import {
  UserIcon,
  CubeIcon,
  FolderIcon,
  BuildingOfficeIcon,
  CreditCardIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const SidebarComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [dropdown, setDropdown] = useState(null); 

  const toggleDropdown = (section) => {
    setDropdown(dropdown === section ? null : section);
  };

  return (
    <div className={`bg-gray-100 text-gray-800 h-full ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="flex flex-col items-start p-4">
        <button
          className="p-2 mb-4 text-xl text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '☰' : '❯'}
        </button>
        <ul className="space-y-6">
          {/* Users Dropdown */}
          <li>
            <a
              href="#"
              onClick={() => toggleDropdown('users')}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              <UserIcon className="h-5 w-5 text-gray-600" />
              <span className={`${!isOpen ? 'hidden' : ''}`}>Users</span>
            </a>
            <ul
              className={`space-y-2 pl-8 transition-all duration-300 ease-in-out overflow-hidden ${dropdown === 'users' ? 'max-h-96' : 'max-h-0'}`}
            >
              <li className="flex items-center space-x-2">
                <PlusIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Create User</a>
              </li>
              <li className="flex items-center space-x-2">
                <UserIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Get Users</a>
              </li>
              <li className="flex items-center space-x-2">
                <PencilIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Update User</a>
              </li>
              <li className="flex items-center space-x-2">
                <TrashIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Delete User</a>
              </li>
            </ul>
          </li>

          {/* Products Dropdown */}
          <li>
            <a
              href="#"
              onClick={() => toggleDropdown('products')}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              <CubeIcon className="h-5 w-5 text-gray-600" />
              <span className={`${!isOpen ? 'hidden' : ''}`}>Products</span>
            </a>
            <ul
              className={`space-y-2 pl-8 transition-all duration-300 ease-in-out overflow-hidden ${dropdown === 'products' ? 'max-h-96' : 'max-h-0'}`}
            >
              <li className="flex items-center space-x-2">
                <PlusIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Create Product</a>
              </li>
              <li className="flex items-center space-x-2">
                <CubeIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Get Products</a>
              </li>
              <li className="flex items-center space-x-2">
                <PencilIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Update Product</a>
              </li>
              <li className="flex items-center space-x-2">
                <TrashIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Delete Product</a>
              </li>
            </ul>
          </li>

          {/* Categories Dropdown */}
          <li>
            <a
              href="#"
              onClick={() => toggleDropdown('categories')}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              <FolderIcon className="h-5 w-5 text-gray-600" />
              <span className={`${!isOpen ? 'hidden' : ''}`}>Categories</span>
            </a>
            <ul
              className={`space-y-2 pl-8 transition-all duration-300 ease-in-out overflow-hidden ${dropdown === 'categories' ? 'max-h-96' : 'max-h-0'}`}
            >
              <li className="flex items-center space-x-2">
                <PlusIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Create Category</a>
              </li>
              <li className="flex items-center space-x-2">
                <FolderIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Get Categories</a>
              </li>
              <li className="flex items-center space-x-2">
                <PencilIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Update Category</a>
              </li>
              <li className="flex items-center space-x-2">
                <TrashIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Delete Category</a>
              </li>
            </ul>
          </li>

          {/* Suppliers Dropdown */}
          <li>
            <a
              href="#"
              onClick={() => toggleDropdown('suppliers')}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              <BuildingOfficeIcon className="h-5 w-5 text-gray-600" />
              <span className={`${!isOpen ? 'hidden' : ''}`}>Suppliers</span>
            </a>
            <ul
              className={`space-y-2 pl-8 transition-all duration-300 ease-in-out overflow-hidden ${dropdown === 'suppliers' ? 'max-h-96' : 'max-h-0'}`}
            >
              <li className="flex items-center space-x-2">
                <PlusIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Create Supplier</a>
              </li>
              <li className="flex items-center space-x-2">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Get Suppliers</a>
              </li>
              <li className="flex items-center space-x-2">
                <PencilIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Update Supplier</a>
              </li>
              <li className="flex items-center space-x-2">
                <TrashIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Delete Supplier</a>
              </li>
            </ul>
          </li>

          {/* Payments Dropdown */}
          <li>
            <a
              href="#"
              onClick={() => toggleDropdown('payments')}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              <CreditCardIcon className="h-5 w-5 text-gray-600" />
              <span className={`${!isOpen ? 'hidden' : ''}`}>Payments</span>
            </a>
            <ul
              className={`space-y-2 pl-8 transition-all duration-300 ease-in-out overflow-hidden ${dropdown === 'payments' ? 'max-h-96' : 'max-h-0'}`}
            >
              <li className="flex items-center space-x-2">
                <PlusIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Create Payment</a>
              </li>
              <li className="flex items-center space-x-2">
                <CreditCardIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Get Payments</a>
              </li>
              <li className="flex items-center space-x-2">
                <PencilIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Update Payment</a>
              </li>
              <li className="flex items-center space-x-2">
                <TrashIcon className="h-5 w-5 text-gray-600" />
                <a href="#" className="text-gray-600 hover:text-gray-900">Delete Payment</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="absolute bottom-4 left-0 w-64 px-4">
        <ul className="space-y-4">
          {/* Profile */}
          <li className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
            </svg>
            <span className={`${!isOpen ? 'hidden' : ''}`}>Profile</span>
          </li>

          <li className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 17l5-5-5-5v3h-4v4h4z" />
              <path d="M21 12l-4-4v3h-7v2h7v3l4-4z" />
            </svg>
            <span className={`${!isOpen ? 'hidden' : ''}`}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;
