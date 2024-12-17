import React, { useState } from 'react';
import ModalComponent from '../modal/ModalComponent';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateSupplierComponent = () => {
  const suppliers = [
    { id: 1, name: 'Supplier A', email: 'supplierA@example.com', phone: '123-456-7890', address: '123 Street, City' },
    { id: 2, name: 'Supplier B', email: 'supplierB@example.com', phone: '987-654-3210', address: '456 Avenue, City' },
    { id: 3, name: 'Supplier C', email: 'supplierC@example.com', phone: '555-666-7777', address: '789 Boulevard, City' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', address: '' });

  const openModal = (supplier) => {
    setSelectedSupplier(supplier);
    setFormData({ 
      name: supplier.name, 
      email: supplier.email, 
      password: '', 
      phone: supplier.phone, 
      address: supplier.address 
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSupplier(null);
    setFormData({ name: '', email: '', password: '', phone: '', address: '' });
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = () => {
    toast.success('Supplier updated successfully!', { autoClose: 1000 });
    closeModal();
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Supplier List</h2>
      
      <div className="block lg:hidden">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="p-4 mb-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-lg font-bold text-gray-700 mb-2">{supplier.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{supplier.email}</p>
            <p className="text-sm text-gray-600 mb-2">Phone: {supplier.phone}</p>
            <p className="text-sm text-gray-500 mb-4">Address: {supplier.address}</p>
            <button onClick={() => openModal(supplier)} className="bg-yellow-500 font-bold text-white px-4 py-2 rounded hover:bg-yellow-600">Update</button>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        <table className="w-full text-left table-auto bg-gray-50 rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4 font-medium text-sm">Name</th>
              <th className="p-4 font-medium text-sm">Email</th>
              <th className="p-4 font-medium text-sm">Phone</th>
              <th className="p-4 font-medium text-sm">Address</th>
              <th className="p-4 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="border-b border-gray-200">
                <td className="p-4 text-gray-700">{supplier.name}</td>
                <td className="p-4 text-gray-600">{supplier.email}</td>
                <td className="p-4 text-gray-600">{supplier.phone}</td>
                <td className="p-4 text-gray-600">{supplier.address}</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal(supplier)} className="bg-yellow-500 font-bold text-white px-4 py-2 rounded hover:bg-yellow-600">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal} title="Update Supplier">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-200" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-200" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-200" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-200" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Address</label>
          <textarea name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-200" />
        </div>
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600">Cancel</button>
          <button onClick={handleUpdateSubmit} className="bg-yellow-500 font-bold text-white px-4 py-2 rounded hover:bg-yellow-600">Save</button>
        </div>
      </ModalComponent>
    </div>
  );
};

export default UpdateSupplierComponent;
