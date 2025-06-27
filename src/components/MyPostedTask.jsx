import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const MyPostedTasks = () => {
  const { user } = useContext(AuthContex);
  const [myTasks, setMyTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch('https://skillbid-server-site.vercel.app/tasks')
        .then((res) => res.json())
        .then((data) => {
          const userTasks = data.filter(task => task.email === user.email);
          setMyTasks(userTasks);
        })
        .catch((err) => console.error('Error fetching tasks:', err));
    }
  }, [user]);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this task?');
    if (!confirm) return;

    fetch(`https://skillbid-server-site.vercel.app/tasks/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success('Task deleted');
          setMyTasks(prev => prev.filter(task => task._id !== id));
        }
      })
      .catch(err => toast.error('Failed to delete task'));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-6" style={{ color: '#bbb5dd' }}>
        My Posted Tasks
      </h2>

      {myTasks.length === 0 ? (
        <p className="text-center text-gray-500">You haven't posted any tasks yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm bg-white">
            <thead style={{ backgroundColor: '#bbb5dd' }} className="text-white text-left">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Deadline</th>
                <th className="px-4 py-3">Budget</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task, index) => (
                <tr key={task._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 font-medium text-gray-800">{task.title}</td>
                  <td className="px-4 py-2">{task.deadline}</td>
                  <td className="px-4 py-2 text-gray-700 font-semibold">${task.budget}</td>
                  <td className="px-4 py-2 space-x-2">
                    <Link
                      to={`/updateTask/${task._id}`}
                      className="px-3 py-1 rounded bg-[#bbb5dd] text-white hover:bg-[#a9a1cc] transition"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/task/${task._id}`}
                      className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600 transition"
                    >
                      Bids
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPostedTasks;
