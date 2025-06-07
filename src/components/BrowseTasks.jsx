import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/tasks') 
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error('Error fetching tasks:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-6xl text-center mb-10">Browse Tasks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={task.photo}
              alt={task.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{task.description}</p>
              <p><span className="font-medium">Budget:</span> ${task.budget}</p>
              <p><span className="font-medium">Deadline:</span> {task.deadline}</p>
              <Link
                to={`/tasks/${task._id}`}
                className="inline-block mt-3 px-4 py-2 bg-[#3DB34B] text-white rounded hover:bg-[#31983d] transition"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
