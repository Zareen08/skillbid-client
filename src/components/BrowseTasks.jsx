import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 
const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://skillbid-server-site.vercel.app/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error('Error fetching tasks:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl text-center mb-10 font-bold">Browse Tasks</h2>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Photo</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Budget</th>
              <th className="py-3 px-4 text-left">Deadline</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="border-t hover:bg-gray-50 transition">
                <td className="py-2 px-4">
                  <img
                    src={task.photo}
                    alt={task.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4 font-medium">{task.title}</td>
                <td className="py-2 px-4">${task.budget}</td>
                <td className="py-2 px-4">{task.deadline}</td>
                <td className="py-2 px-4">
                  <Link
                    to={`/task/${task._id}`}
                    className="bg-[#3DB34B] text-white px-3 py-1 rounded hover:bg-[#31983d] transition"
                  >
                    See Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {tasks.length === 0 && (
          <div className="text-center mt-6 text-gray-500">No tasks available.</div>
        )}
      </div>
    </div>
  );
};

export default BrowseTasks;
