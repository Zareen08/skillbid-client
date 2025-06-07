import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/tasks/${id}`)
      .then(res => res.json())
      .then(data => setTask(data));
  }, [id]);

  if (!task) return <div className="text-center mt-10">Loading task details...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-6xl font-bold mb-4 text-[#3DB34B]">{task.title}</h1>
      <img src={task.photo} alt={task.title} className="rounded-lg mb-4 w-full h-64 object-cover" />
      <p className="mb-2"><strong>Description:</strong> {task.description}</p>
      <p className="mb-2"><strong>Category:</strong> {task.category}</p>
      <p className="mb-2"><strong>Deadline:</strong> {task.deadline}</p>
      <p className="mb-2"><strong>Budget:</strong> ${task.budget}</p>
      <p className="mb-2"><strong>Posted By:</strong> {task.name} ({task.email})</p>
    </div>
  );
};

export default TaskDetails;
