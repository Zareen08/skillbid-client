import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData()
    const [users, setUsers] = useState(initialUsers)
    const handleDelete =(id) =>{
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
    fetch(`https://skillbid-server-site.vercel.app/users/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data=>{
       if(data.deletedCount){
        const remainingUsers = users.filter(user=> user._id !== id);
        setUsers(remainingUsers);
        Swal.fire({
      title: "Deleted!",
      text: "User has been deleted.",
      icon: "success"
    });
       }
    })
    
  }
});
    }
    return (
        <div>
            <h1 className='text-4xl md:6xl text-center p-12'>Users: {initialUsers.length}</h1>

            <div className="overflow-x-auto">
  <table className="table mx-auto">
    
    <thead>
      <tr>
        <th>
          <label>
            SL
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        
        <th>Action Buttons</th>
      </tr>
    </thead>
    <tbody>
      
      {
        users.map((user, index)=><tr key={user._id}>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="user photo" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {user.email}
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">View</button>
          <button className="btn btn-ghost btn-xs">Edit</button>
          <button onClick={()=> handleDelete(user._id)} className="btn btn-ghost btn-xs">X</button>
        </th>
      </tr>)
      }
     
      
      
      
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default Users;