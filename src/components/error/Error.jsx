import React from 'react';
import { Link, useRouteError } from 'react-router'; 
import Header from '../Header';

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Header />

      <div className="mt-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-[100px] font-extrabold text-[#bbb5dd] leading-none mb-4 drop-shadow">
          {error?.status || 404}
        </h2>
        <p className="text-2xl text-[#5f5a7c] mb-6 font-medium">
          {error?.error?.message || "Oops! Page not found."}
        </p>

        <Link to="/">
          <button className="bg-[#0A5DA9] hover:bg-[#084b8b] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 shadow-md">
            ⬅ Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
