import React from 'react';
import Swal from 'sweetalert2';

const AddTask = () => {

   const handleAddTask = e =>{
    e.preventDefault();
    const form =e.target;
    const formData = new FormData(form);
    
    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)
     

    fetch('http://localhost:4000/tasks',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newTask)
    })
    .then(res => res.json())
    .then(data=>{
        if(data.insertedId){
            console.log('added successfully')
            Swal.fire({
                title: "Task Added Successfully",
                icon: "success",
                draggable:true
            })
        }
    })
   }

    return (
        <div className='p-10'>
            <div className='p-10'>
                <h1 className='text-2xl font-bold text-center mb-6 text-[#003366]'>Add Task</h1>
                <p className='text-center mt-3'>Easily post a new task to SkillBid by providing a clear title, description, deadline, and budget. Whether you're looking for help with design, writing, development, or any other service, our platform connects you with skilled freelancers ready to take it on. Get started and find the right talent today!
                  Select 44 more words to run Humanizer.
                </p>
            </div>

            <form action="" onSubmit={handleAddTask} className='mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
                    <fieldset className="fieldset">
                    <label className="label">Title</label>
                    <input type="text" name="title" placeholder="Task Title" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"/>
                    
                    </fieldset>
                    <fieldset className="fieldset">
                    <label className="label">Description</label>
                    <textarea name="description" placeholder="Task Description" required rows={4} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"/>

                    </fieldset>
                    <fieldset className="fieldset">
                    <label className="label">Deadline</label>
                     <input type="date" name="deadline" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"/>
                     </fieldset>
                    <fieldset className="fieldset">
                    <label className="label">Budget</label>
                     <input type="number" name="budget" placeholder="Budget (USD)" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]" />

                    </fieldset>
                </div>
                    <fieldset className="fieldset">
                    <label className="label">Photo URL</label>
                     <input type="text" name="photo" placeholder="photo URL" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]" />

                    </fieldset>
                    <button type="submit" className="w-full bg-[#3DB34B] text-white p-2 rounded hover:bg-[#2b9c3b] transition">
                    Submit Task
                    </button>
            </form>
        </div>
    );
};

export default AddTask;