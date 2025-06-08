import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router'; 
import Theme from './Theme'; 
import { AuthContex } from './AuthContex'; 
import { toast } from 'react-toastify';

const Header = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success('Logged out successfully!'))
      .catch((err) => toast.error('Logout failed'));
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-green-600' : ''}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/browsetask" className={({ isActive }) => isActive ? 'font-bold text-green-600' : ''}>
          Browse Tasks
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addtask" className={({ isActive }) => isActive ? 'font-bold text-green-600' : ''}>
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/mytasks" className={({ isActive }) => isActive ? 'font-bold text-green-600' : ''}>
              My Posted Tasks
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="/logo.png" alt="Logo" className="w-28 h-16 object-contain" />
        </Link>
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow z-10 w-52">
            {menuItems}
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>

      <div className="navbar-end space-x-2 flex items-center">
        {!user ? (
          <>
            <Link to="/auth/login" className="btn btn-outline btn-sm">Login</Link>
            <Link to="/auth/signup" className="btn btn-outline btn-sm">Signup</Link>
          </>
        ) : (
          <>
            <div className="relative group">
              <img
                src={user.photoURL || '/default-avatar.png'}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
              />
              <div className="absolute hidden group-hover:block z-50 bg-white shadow p-2 rounded text-sm mt-1 whitespace-nowrap">
                {user.displayName || 'User'}
              </div>
            </div>
            <button onClick={handleLogout} className="btn btn-sm bg-green-600 text-white">
              Logout
            </button>
          </>
        )}
        <Theme />
      </div>
    </div>
  );
};

export default Header;
