import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { FiInfo } from 'react-icons/fi';

const FindByTaskCategory = () => {
  const { category } = useParams(); 
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!category) return;

  fetch(`https://skillbid-server-site.vercel.app/tasks/category/${encodeURIComponent(category)}`)
    .then(res => res.json())
    .then(data => {
      setTasks(data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Failed to fetch tasks by category:', err);
      setLoading(false);
    });
}, [category]);


  if (loading) return <p className="text-center py-12 text-[#0A5DA9] font-medium">Loading tasks...</p>;
  if (tasks.length === 0) return <p className="text-center py-12 text-gray-600">No tasks found for <strong>{category}</strong>.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-[#0A5DA9] capitalize">Tasks for {category}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map(task => (
          <div key={task._id} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <img
              src={task.photo || '/default-task.png'}
              alt={task.title}
              className="w-full h-48 object-cover rounded mb-4"
              onError={e => { e.target.src = '/default-task.png'; }}
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h2>
            <p className="text-gray-600 text-sm mb-1"><strong>Budget:</strong> ${task.budget}</p>
            <p className="text-gray-600 text-sm mb-1"><strong>Deadline:</strong> {task.deadline}</p>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">{task.description || 'No description provided.'}</p>

            <Link
              to={`/task/${task._id}`}
              className="inline-flex items-center px-4 py-2 bg-[#0A5DA9] text-white rounded hover:bg-[#084b8b] transition"
            >
              <FiInfo className="mr-2" />
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindByTaskCategory;
