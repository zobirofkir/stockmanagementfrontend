"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the profile info
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-[600px]">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Update Profile</h2>

        <div className="flex justify-center mb-6">
          <label htmlFor="profileImage" className="relative cursor-pointer">
            <Image
              width={150}
              height={150}
              src={
                profileImage ||
                'https://via.placeholder.com/150?text=Profile+Image'
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 focus:ring focus:ring-gray-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage; 
