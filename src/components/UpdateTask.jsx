import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTask = () => {
  const { title, _id, description, budget, deadline, photo } = useLoaderData();

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTask = Object.fromEntries(formData.entries());

    fetch(`https://skillbid-server-site.vercel.app/tasks/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Task has been Updated',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-6 md:p-12 lg:p-24 bg-base-100 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#5f5a7c]">Update Task</h1>
        <p className="mt-2 text-[#8884b3]">Modify your task information below</p>
      </div>

      <form onSubmit={handleUpdateTask} className="space-y-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-[#8884b3] font-medium">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Task Title"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bbb5dd]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#8884b3] font-medium">Deadline</label>
            <input
              type="date"
              name="deadline"
              defaultValue={deadline}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bbb5dd]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#8884b3] font-medium">Budget</label>
            <input
              type="number"
              name="budget"
              defaultValue={budget}
              placeholder="Budget (USD)"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bbb5dd]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#8884b3] font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bbb5dd]"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-[#8884b3] font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            rows={5}
            placeholder="Task Description"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bbb5dd]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#bbb5dd] text-white font-semibold py-3 rounded-lg hover:bg-[#a69fcb] transition duration-200"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
