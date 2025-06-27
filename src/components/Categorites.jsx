import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router'; 
const Categories = ({ cats }) => {
  const { name, image} = cats;

  return (
    <Link to={`/tasks/category/${name}`} className="group cursor-pointer">
      <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-[#bbb5dd]">
        <figure className="px-6 pt-6 flex flex-col items-center">
          <img
            src={image}
            alt={`${name} Icon`}
            className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </figure>
        <div className="card-body items-center text-center pt-2 pb-6 px-6 flex-grow">
          <h2 className="card-title text-lg font-semibold mb-2 text-gray-800">{name}</h2>
          <div className="flex items-center justify-center text-[#8884b3] group-hover:text-[#5f5a7c] transition-colors">
            <span className="text-sm font-medium mr-1.5">Browse tasks</span>
            <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
