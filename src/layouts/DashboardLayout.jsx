import React from 'react';
import { Outlet, NavLink } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive ? 'text-teal-400 font-semibold' : 'hover:text-teal-300'
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? 'text-teal-400 font-semibold' : 'hover:text-teal-300'
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-teal-400 font-semibold' : 'hover:text-teal-300'
            }
          >
            Home
          </NavLink>
        </nav>
      </aside>

      
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
