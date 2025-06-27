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
      .catch(() => toast.error('Logout failed'));
  };

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-white bg-black/20'
              : 'hover:bg-black/10 transition-colors'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browsetask"
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-white bg-black/20'
              : 'hover:bg-black/10 transition-colors'
          }
        >
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-white bg-black/20'
              : 'hover:bg-black/10 transition-colors'
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-white bg-black/20'
              : 'hover:bg-black/10 transition-colors'
          }
        >
          Contact
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/addtask"
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-white bg-black/20'
                  : 'hover:bg-black/10 transition-colors'
              }
            >
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mytasks"
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-white bg-black/20'
                  : 'hover:bg-black/10 transition-colors'
              }
            >
              My Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-white bg-black/20'
                  : 'hover:bg-black/10 transition-colors'
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#bbb5dd] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="SkillBid Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-5">{menuItems}</ul>
          </nav>

          
          <div className="flex items-center space-x-4">
            <Theme />

            {!user ? (
              <div className="flex space-x-2">
                <Link
                  to="/auth/login"
                  className="px-4 py-2 text-sm font-medium text-white hover:bg-black/10 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <img
                    src={user.photoURL || '/default-avatar.png'}
                    alt="User"
                    className="w-9 h-9 rounded-full border-2 border-white/80 cursor-pointer hover:border-white transition-colors"
                  />
                  <div className="absolute right-0 hidden group-hover:block z-50 bg-white text-gray-800 shadow-lg p-2 rounded-lg text-sm mt-2 whitespace-nowrap">
                    {user.displayName || 'User'}
                    <div className="absolute -top-1 right-3 w-3 h-3 bg-white transform rotate-45"></div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 text-sm font-medium text-white bg-black/10 rounded-lg hover:bg-black/20 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}

            
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        
        <div className="md:hidden pb-3 pt-2">
          <ul className="flex flex-col space-y-1">{menuItems}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
