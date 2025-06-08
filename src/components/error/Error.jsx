import React from 'react';
import { Link, useRouteError } from 'react-router'; 
import Header from '../Header';


const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <Header></Header>

      <div className="mt-16 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-6xl font-bold text-red-500 mb-4">{error?.status || 404}</h2>
        <p className="text-xl text-gray-700 mb-6">
          {error?.error?.message || "Oops! Page not found."}
        </p>

        <Link to="/">
          <button className="bg-[#0EA106] hover:bg-[#0c8804] text-white px-6 py-2 rounded-full transition">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
