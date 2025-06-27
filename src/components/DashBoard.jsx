import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { FaTasks, FaUserAlt, FaClipboardList } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AuthContex);
  const [stats, setStats] = useState({
    totalTasks: 0,
    myTasks: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    if (!user?.email) return;

    const fetchStats = async () => {
      try {
        
        const taskRes = await fetch('https://skillbid-server-site.vercel.app/tasks');
        const tasks = await taskRes.json();

        
        const userRes = await fetch('https://skillbid-server-site.vercel.app/users');
        const users = await userRes.json();

        const myTasks = tasks.filter(task => task.email === user.email);

        setStats({
          totalTasks: tasks.length,
          myTasks: myTasks.length,
          totalUsers: users.length,
        });
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      }
    };

    fetchStats();
  }, [user]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#5f5a7c] mb-6">Welcome to your Dashboard</h1>

      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-3">User Info</h2>
        <div className="flex items-center space-x-4">
          <img
            src={user?.photoURL || '/default-avatar.png'}
            alt="User"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <p className="font-semibold">{user?.displayName || 'User'}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#bbb5dd] text-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaTasks className="text-3xl mb-2" />
          <h3 className="text-xl font-semibold">Total Tasks</h3>
          <p className="text-2xl">{stats.totalTasks}</p>
        </div>

        <div className="bg-[#5f5a7c] text-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaUserAlt className="text-3xl mb-2" />
          <h3 className="text-xl font-semibold">My Tasks</h3>
          <p className="text-2xl">{stats.myTasks}</p>
        </div>

        <div className="bg-[#0A5DA9] text-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaClipboardList className="text-3xl mb-2" />
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-2xl">{stats.totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
