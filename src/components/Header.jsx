import React from 'react';
import { NavLink, Link } from 'react-router';

const Header = () => {
  const menuItems = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold text-green-600' : ''}>Home</NavLink></li>
      <li><NavLink to="/browsetask" className={({ isActive }) => isActive ? 'font-semibold text-green-600' : ''}>Browse Tasks</NavLink></li>
      <li><NavLink to="/addtask" className={({ isActive }) => isActive ? 'font-semibold text-green-600' : ''}>Add Task</NavLink></li>
      <li><NavLink to="/mytasks" className={({ isActive }) => isActive ? 'font-semibold text-green-600' : ''}>My Posted Tasks</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
    
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="/logo.png" alt="Logo" className="w-28 h-16 object-contain" />
        </Link>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>

      
      <div className="navbar-end space-x-2">
        <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
        <Link to="/signup" className="btn btn-outline btn-sm">Signup</Link>
      </div>
    </div>
  );
};

export default Header;
