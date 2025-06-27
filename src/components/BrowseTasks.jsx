import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FiClock, FiDollarSign, FiArrowRight } from 'react-icons/fi';

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://skillbid-server-site.vercel.app/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tasks:', err);
        setLoading(false);
      });
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? task.category?.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5f5a7c] mb-4">Browse Available Tasks</h2>
        <p className="text-[#8884b3] max-w-2xl mx-auto">
          Find the perfect task that matches your skills and start earning today.
        </p>
      </div>

      
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bbb5dd] focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bbb5dd] focus:border-transparent"
        >
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Content Writing">Content Writing</option>
          <option value="Marketing">Marketing</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#bbb5dd]"></div>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-500 text-lg mb-4">
            {searchTerm || selectedCategory ? 'No tasks match your filters' : 'No tasks available yet'}
          </div>
          <Link
            to="/addtask"
            className="inline-flex items-center px-6 py-3 bg-[#bbb5dd] text-white rounded-lg hover:bg-[#a29ec8] transition"
          >
            Post the First Task
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTasks.map((task) => (
            <div key={task._id} className="bg-base border border-[#e5e5f1] rounded-xl shadow-sm hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={task.photo || '/default-task.png'}
                    alt={task.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-[#5f5a7c] line-clamp-2">{task.title}</h3>
                    <div className="text-sm text-gray-400 mt-1">Category: {task.category || 'N/A'}</div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-[#bbb5dd]">
                    <FiDollarSign className="mr-1" />
                    <span className="font-semibold">${task.budget}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FiClock className="mr-1" />
                    <span>{task.deadline}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {task.description || 'No description provided.'}
                </p>

                <Link
                  to={`/task/${task._id}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2 bg-[#f0effa] text-[#5f5a7c] rounded-md hover:bg-[#e6e5f5] transition"
                >
                  <span>View Details</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTasks;
