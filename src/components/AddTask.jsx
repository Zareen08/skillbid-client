import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContex } from './AuthContex'; 

const AddTask = () => {
  const { user } = useContext(AuthContex); 

  const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    fetch('https://skillbid-server-site.vercel.app/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Task Added Successfully!",
            icon: "success",
            confirmButtonColor: "#3DB34B"
          });
          form.reset();
        }
      });
  };

  return (
    <div className='p-10'>
      <div className='p-10'>
        <h1 className='text-2xl font-bold text-center mb-6 text-[#003366]'>Add Task</h1>
        <p className='text-center mt-3 max-w-3xl mx-auto'>
          Easily post a new task to SkillBid by providing a clear title, description, deadline, and budget...
        </p>
      </div>

      <form onSubmit={handleAddTask} className='max-w-4xl mx-auto space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          
          <fieldset>
            <label className="label">User Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ''}
              readOnly
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            />
          </fieldset>

          <fieldset>
            <label className="label">User Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email || ''}
              readOnly
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            />
          </fieldset>

          <fieldset>
            <label className="label">Task Title</label>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            />
          </fieldset>

          <fieldset>
            <label className="label">Category</label>
            <select
              name="category"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            >
              <option value="">Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Design">Design</option>
              <option value="Writing">Writing</option>
              <option value="Marketing">Marketing</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>

          <fieldset className="md:col-span-2">
            <label className="label">Description</label>
            <textarea
              name="description"
              placeholder="Task Description"
              required
              rows={4}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            />
          </fieldset>

          <fieldset>
            <label className="label">Deadline</label>
            <input
              type="date"
              name="deadline"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            />
          </fieldset>

          <fieldset>
            <label className="label">Budget</label>
            <input
              type="number"
              name="budget"
              placeholder="Budget (USD)"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            />
          </fieldset>

          <fieldset className="md:col-span-2">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL (Optional)"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"
            />
          </fieldset>
        </div>

        <button
          type="submit"
          className="w-full bg-[#3DB34B] text-white p-3 rounded hover:bg-[#2b9c3b] transition"
        >
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
