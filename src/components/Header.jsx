
import { AuthCon } from '../Provider/AuthProvider';
import { Link, NavLink } from 'react-router';
import {  useContext } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = useContext(AuthCon);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-[#3DB34B] font-semibold border-b-2 border-[#3DB34B]' : 'text-white hover:text-[#3DB34B]';

  const links = (
    <>
      <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
      <li><NavLink to="/tasks" className={navLinkClass}>Browse Tasks</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/add-task" className={navLinkClass}>Add Task</NavLink></li>
          <li><NavLink to="/my-posted-tasks" className={navLinkClass}>My Posted Tasks</NavLink></li>
        </>
      )}
    </>
  );
    return (
       <div className="navbar bg-[#003366] text-white shadow-sm px-4">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="logo.png" alt="Logo" className="w-20" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {links}
        </ul>
      </div>

      <div className="navbar-end space-x-4 flex items-center">
        {user ? (
  <div className="relative group">
    <img
      src={user.photoURL}
      alt="User"
      className="w-10 h-10 rounded-full border-2 border-[#3DB34B] cursor-pointer"
    />

    
    <div className="absolute right-0 mt-2 bg-white text-[#003366] border rounded shadow-md text-sm p-2 hidden group-hover:block z-10 w-40">
      <p className="mb-2 font-semibold text-center">{user.displayName}</p>
      <button
        onClick={handleLogout}
        className="w-full bg-[#3DB34B] hover:bg-[#2b9c3b] text-white py-1 rounded text-sm"
      >
        Log out
      </button>
    </div>
  </div>
) : (
  <>
    <Link
      to="/auth/login"
      className="py-1.5 px-4 bg-[#3DB34B] text-white rounded-full hover:bg-[#2b9c3b]"
    >
      Login
    </Link>
    
  </>


        )}
      </div>
    </div> 
    );
};

export default Header;