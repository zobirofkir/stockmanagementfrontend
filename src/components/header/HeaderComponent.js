"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const HeaderComponent = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth?.user?.name);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md md:px-12 px-5">
      <div className="text-gray-900 font-semibold text-xl">
        <span className="md:block hidden">{name || "Guest"}</span>
      </div>

      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center space-x-2">
          <Image
            width={40}
            height={40}
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </button>

        <div
          className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isDropdownOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="py-1">
            <Link href="/dashboard/users/profile" className="block px-4 py-2 text-gray-700 text-sm">
              Profile
            </Link>
            <button
              onClick={() => dispatch(LogoutAction())}
              className="block w-full text-left px-4 py-2 text-gray-700 text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
