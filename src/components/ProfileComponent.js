"use client";

import { ProfileAction } from "@/redux/actions/ProfileAction";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileComponent = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { profile, error, loading } = useSelector((state) => state.profile); 

  useEffect(() => {
    dispatch(ProfileAction());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setEmail(profile.email || "");
      setPassword(profile.password || "********"); 
      setProfileImage(profile.image || null);
    }
  }, [profile]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-[600px]">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Profile Information
        </h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {loading && (
          <div className="text-gray-500 text-center mb-4">Loading...</div>
        )}

        {!loading && (
          <div className="flex justify-center mb-6">
            <Image
              width={150}
              height={150}
              src={profileImage || "https://via.placeholder.com/150?text=Profile+Image"} // Placeholder if image is null
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Name</label>
          <p className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100">
            {name || "No name provided"}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <p className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100">
            {email || "No email provided"}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Password</label>
          <p className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100">
            {password || "********"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
