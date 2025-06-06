import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const TaskCards = ({task, tasks, setTasks}) => {
    const { _id,title, photo, description, deadline, budget} = task;

    const handleDelete = (_id)=>{
     console.log(_id)
     Swal.fire({
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!"
   }).then((result) => {
    
     if (result.isConfirmed) {

        fetch(`http://localhost:4000/tasks/${_id}`,{
            method: 'DELETE',

        })
        .then(res=> res.json())
        .then(data =>{
            if(data.deletedCount){
              Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
              });

              const remainingTasks = tasks.filter(tas=> tas._id !==_id);
              setTasks(remainingTasks);
            }
        })
     
  }
});
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm h-80">
           <figure>
             <img
               src={photo}
               alt="taskPic" className='w-50 h-50' />
           </figure>
           <div className="flex mt-20 ms-2 w-full justify-around">
             <div>
             <h2 className="card-title">{title}</h2>

             <p>{description}</p>
             <p>{deadline}</p>
             <p>{budget}$</p>
             </div>
             <div className='card-actions justify-end'>
                <div className="join join-vertical">
            <Link to={`/task/${_id}`}>
            <button className="btn join-item text-white bg-[#3DB34B]">View</button>
            </Link>
            <Link to={`/updateTask/${_id}`}>
            <button className="btn join-item text-white bg-[#3DB34B]">Edit</button>
            </Link>
            <button onClick={()=>handleDelete(_id)} className="btn join-item text-white bg-[#3DB34B]">X</button>
            </div>
             </div>
           </div>
         </div>
        </div>
    );
};

export default TaskCards;