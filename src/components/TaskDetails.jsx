import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [bidsCount, setBidsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setBidsCount(data.bidsCount || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load task details:', err);
        setLoading(false);
      });
  }, [id]);

  const handleBid = () => {
    fetch(`http://localhost:4000/tasks/${id}/bid`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setBidsCount(prev => prev + 1);
        }
      })
      .catch(err => console.error('Bid failed:', err));
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!task) return <div className="text-center mt-10">Task not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <p className="text-lg font-semibold mb-6 text-green-600">
        You bid for <span className="font-bold">{bidsCount}</span> opportunities.
      </p>

      <h1 className="text-4xl font-bold mb-4">{task.title}</h1>
      <img
        src={task.photo}
        alt={task.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <p className="text-gray-700 mb-4">{task.description}</p>

      <div className="mb-2"><strong>Category:</strong> {task.category}</div>
      <div className="mb-2"><strong>Budget:</strong> ${task.budget}</div>
      <div className="mb-6"><strong>Deadline:</strong> {task.deadline}</div>

      <button
        onClick={handleBid}
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
      >
        Place Bid
      </button>
    </div>
  );
};

export default TaskDetails;
