import React from 'react';
import { Link } from 'react-router';

const TaskCards = ({ task }) => {
  const { _id, title, photo, description, deadline, budget } = task;

  return (
    <div className="bg-base dark:bg-gray-800 border border-[#bbb5dd] dark:border-[#8882bb] rounded-lg shadow-md p-4 flex flex-col h-full transition duration-300">
      <img
        src={photo}
        alt={title}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-xl font-semibold mb-2 text-[#bbb5dd] dark:text-[#c2bcf0]">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">
        {description.slice(0, 80)}...
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2"> {deadline}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
         Budget: ${budget}
      </p>

      <div className="mt-auto text-center">
        <Link to={`/task/${_id}`}>
          <button className="btn btn-sm bg-[#bbb5dd] text-white hover:bg-[#a19bc7] dark:hover:bg-[#a79ed9] transition">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TaskCards;
