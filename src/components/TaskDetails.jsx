import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [bidsCount, setBidsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [bidPlaced, setBidPlaced] = useState(false);

  useEffect(() => {
    fetch(`https://skillbid-server-site.vercel.app/tasks/${id}`)
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
    fetch(`https://skillbid-server-site.vercel.app/tasks/${id}/bid`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setBidsCount(prev => prev + 1);
          setBidPlaced(true);
        }
      })
      .catch(err => console.error('Bid failed:', err));
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner text-[#bbb5dd] w-16 h-16"></span>
    </div>
  );

  if (!task) return (
    <div className="text-center mt-20 text-xl text-[#bbb5dd]">
      Task not found.
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-base-100 rounded-lg p-6 shadow-md space-y-6">

  
        <div className="rounded-lg p-4 bg-[#eeeaf8] text-[#5f5a7c]">
          <p className="text-lg font-semibold">
            You bid for <span className="font-bold text-[#bbb5dd]">{bidsCount}</span> opportunities.
          </p>
        </div>

        
        <div className="border-l-4 pl-4 border-[#bbb5dd]">
          <h1 className="text-3xl font-bold text-[#5f5a7c]">{task.title}</h1>
          <p className="mt-1 text-[#8884b3]">{task.category}</p>
        </div>

        <figure className="rounded-lg overflow-hidden shadow-md">
          <img
            src={task.photo}
            alt={task.title}
            className="w-full h-64 object-cover"
          />
        </figure>

        
        <div className="bg-base-200 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-[#5f5a7c] mb-3">Description</h2>
          <p className="text-gray-700 leading-relaxed">{task.description}</p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card bg-base-200 p-4 rounded-lg shadow-sm">
            <p className="text-[#8884b3] font-medium">Budget</p>
            <h3 className="text-xl font-bold text-[#5f5a7c]">${task.budget}</h3>
          </div>
          <div className="card bg-base-200 p-4 rounded-lg shadow-sm">
            <p className="text-[#8884b3] font-medium">Deadline</p>
            <h3 className="text-lg text-[#5f5a7c]">{task.deadline}</h3>
          </div>
          <div className="card bg-base-200 p-4 rounded-lg shadow-sm">
            <p className="text-[#8884b3] font-medium">Status</p>
            <h3 className="text-lg text-[#5f5a7c]">Open</h3>
          </div>
        </div>

        
        <div className="text-center">
          <button
            onClick={handleBid}
            disabled={bidPlaced}
            className={`btn px-6 py-3 rounded-lg font-medium text-white shadow-md transition-all ${
              bidPlaced ? 'bg-[#d6d3ea] cursor-not-allowed' : 'bg-[#bbb5dd] hover:bg-[#a69fcb]'
            }`}
          >
            {bidPlaced ? 'Bid Placed Successfully!' : 'Place Bid'}
          </button>
          {bidPlaced && (
            <p className="mt-3 text-[#8884b3]">Thank you for your bid!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
