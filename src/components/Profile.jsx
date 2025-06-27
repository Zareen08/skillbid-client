import React, { useContext } from 'react';
import { AuthContex } from '../Components/AuthContex';

const Profile = () => {
  const { user } = useContext(AuthContex);

  if (!user) {
    return (
      <div className="text-center mt-10 text-xl font-medium text-red-500">
        No user is logged in.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#5f5a7c]">My Profile</h1>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={user.photoURL || '/default-avatar.png'}
          alt="User"
          className="w-24 h-24 rounded-full border border-gray-300 shadow-sm"
        />

        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">{user.displayName || 'No Name Provided'}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
