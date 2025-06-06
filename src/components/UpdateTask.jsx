import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTask = () => {
    const {title, _id, description, budget, deadline, photo} = useLoaderData();

    const handleUpdateTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const updatedTask = Object.fromEntries(formData.entries())
        console.log(updatedTask)

        fetch(`http://localhost:4000/tasks/${_id}`,{
           method: 'PUT',
           headers: {
            'content-type':'application/json'
           },
           body: JSON.stringify(updatedTask)
        })
        .then(res=> res.json())
        .then(data =>{
        if(data.modifiedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:" Task has been Updated",
                showConfirmButton: false,
                timer:1500
            })
        }
        })


    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Update Task</h1>
            </div>
            <form onSubmit={handleUpdateTask}>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
                    <fieldset className="fieldset">
                    <label className="label">Title</label>
                    <input type="text" name="title" defaultValue={title} placeholder="Task Title" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"/>
                    
                    </fieldset>
                    <fieldset className="fieldset">
                    <label className="label">Description</label>
                    <textarea name="description" defaultValue={description} placeholder="Task Description" required rows={4} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"/>

                    </fieldset>
                    <fieldset className="fieldset">
                    <label className="label">Deadline</label>
                     <input type="date" defaultValue={deadline} name="deadline" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]"/>
                     </fieldset>
                    <fieldset className="fieldset">
                    <label className="label">Budget</label>
                     <input type="number" name="budget" defaultValue={budget} placeholder="Budget (USD)" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]" />

                    </fieldset>
                </div>
                    <fieldset className="fieldset">
                    <label className="label">Photo URL</label>
                     <input type="text" name="photo" defaultValue={photo} placeholder="photo URL" required className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3DB34B]" />

                    </fieldset>
                    <button type="submit" className="w-full bg-[#3DB34B] text-white p-2 rounded hover:bg-[#2b9c3b] transition">
                    Update Task
                    </button>
            </form>
        </div>
    );
};

export default UpdateTask;