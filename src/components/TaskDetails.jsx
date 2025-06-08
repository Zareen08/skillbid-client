import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; 

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [bidsCount, setBidsCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:4000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setBidsCount(data.bidsCount || 0);
      });
  }, [id]);

  const handleBid = () => {
    fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setBidsCount(prev => prev + 1);
        }
      });
  };

  if (!task) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">{task.title}</h1>

      <p className="text-lg font-semibold mb-4 text-green-600">
        You bid for {bidsCount} opportunities.
      </p>

      <img
        src={task.photo}
        alt={task.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <div className="space-y-4">
        <p><span className="font-bold">Description:</span> {task.description}</p>
        <p><span className="font-bold">Budget:</span> ${task.budget}</p>
        <p><span className="font-bold">Deadline:</span> {task.deadline}</p>
        {task.name && (
          <p><span className="font-bold">Posted By:</span> {task.name}</p>
        )}
        <p><span className="font-bold">Bids Count:</span> {bidsCount}</p>
      </div>

      <div className="mt-6">
        <button
          onClick={handleBid}
          className="btn bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
