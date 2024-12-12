import Image from 'next/image';
import React from 'react';

const LoginComponent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-light-gray">
      {/* Left side: Login form */}
      <div className="w-full sm:w-1/2 p-6 bg-white rounded-lg md:px-[10%] px-5">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 focus:outline-none font-bold hover:rotate-2 duration-300"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="hidden sm:block sm:w-1/2 bg-gray-100">
        <Image 
          src="https://healthywork.es/wp-content/uploads/2023/03/teambuilding-4-836x836.jpg" 
          alt="Login Image" 
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default LoginComponent;
