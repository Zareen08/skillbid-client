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
      <h2 className="text-4xl mb-6 text-center font-bold" style={{ color: '#5f5a7c' }}>
        My Posted Tasks
      </h2>

      {myTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks posted yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg shadow-sm">
            <thead style={{ backgroundColor: '#bbb5dd' }}>
              <tr className="text-white">
                <th>#</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Budget</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task, index) => (
                <tr key={task._id} className="hover:bg-gray-50">
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.deadline}</td>
                  <td>${task.budget}</td>
                  <td className="space-x-2">
                    <Link
                      to={`/updateTask/${task._id}`}
                      className="px-3 py-1 rounded bg-[#bbb5dd] text-white hover:bg-[#a59fd1] transition"
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
