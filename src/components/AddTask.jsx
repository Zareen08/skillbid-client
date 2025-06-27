import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContex } from './AuthContex';

const AddTask = () => {
  const { user } = useContext(AuthContex);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    fetch('https://skillbid-server-site.vercel.app/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Task Added Successfully!',
            icon: 'success',
            confirmButtonColor: '#bbb5dd',
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-base rounded-lg shadow-md mt-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#5f5a7c]">Add Task</h1>
        <p className="text-[#8884b3] mt-3 max-w-xl mx-auto text-sm md:text-base">
          Easily post a new task to SkillBid by providing a clear title, description, deadline, and budget.
        </p>
      </div>

      <form onSubmit={handleAddTask} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <fieldset>
            <label htmlFor="name" className="block mb-2 font-semibold text-[#5f5a7c]">
              User Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user?.displayName || ''}
              readOnly
              className="w-full rounded-md border border-[#ccc] bg-white p-3 text-[#5f5a7c] placeholder-gray-400 focus:border-[#bbb5dd] focus:ring-2 focus:ring-[#bbb5dd] focus:outline-none transition"
            />
          </fieldset>

          
          <fieldset>
            <label htmlFor="email" className="block mb-2 font-semibold text-[#5f5a7c]">
              User Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user?.email || ''}
              readOnly
              className="w-full rounded-md border border-[#ccc] bg-white p-3 text-[#5f5a7c] placeholder-gray-400 focus:border-[#bbb5dd] focus:ring-2 focus:ring-[#bbb5dd] focus:outline-none transition"
            />
          </fieldset>

          
          <fieldset>
            <label htmlFor="title" className="block mb-2 font-semibold text-[#5f5a7c]">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Task Title"
              required
              className="w-full rounded-md border border-[#ccc] bg-white p-3 text-[#5f5a7c] placeholder-gray-400 focus:border-[#bbb5dd] focus:ring-2 focus:ring-[#bbb5dd] focus:outline-none transition"
            />
          </fieldset>

          
          <fieldset>
            <label htmlFor="category" className="block mb-2 font-semibold text-[#5f5a7c]">
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="w-full rounded-md border border-[#ccc] bg-white p-3 text-[#5f5a7c] placeholder-gray-400 focus:border-[#bbb5dd] focus:ring-2 focus:ring-[#bbb5dd] focus:outline-none transition"
            >
              <option value="">Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Design">Design</option>
              <option value="Writing">Writing</option>
              <option value="Marketing">Marketing</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>

          
          <fieldset>
            <label htmlFor="deadline" className="block mb-2 font-semibold text-[#5f5a7c]">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              required
              className="w-full rounded-md border border-[#ccc] bg-white p-3 text-[#5f5a7c] placeholder-gray-400 focus:border-[#bbb5dd] focus:ring-2 focus:ring-[#bbb5dd] focus:outline-none transition"
            />
          </fieldset>

          
          <fieldset>
            <label htmlFor="budget" className="block mb-2 font-semibold text-[#5f5a7c]">
              Budget
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              placeholder="Budget (USD)"
              required
              className="w-full rounded-md border border-[#ccc] bg-white p-3 text-[#5f5a7c] placeholder-gray-400 focus:border-[#bbb5dd] focus:ring-2 focus:ring-[#bbb5dd] focus:outline-none transition"
            />
          </fieldset>

          
          <fieldset className="md:col-span-2">
            <label htmlFor="photo" className="block mb-2 font-semibold text-[#5f5a7c]">
              Photo URL (Optional)
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Photo URL"
              className="w-full rounded-md border border-[#ccc] bg-white p-3 text-[#5f5a7c] placeholder-gray-400 focus:border-[#bbb5dd] focus:ring-2 focus:ring-[#bbb5dd] focus:outline-none transition"
            />
          </fieldset>
        </div>

        <button
          type="submit"
          className="w-full bg-[#bbb5dd] hover:bg-[#9c98cd] text-white font-semibold py-3 rounded-md transition"
        >
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
