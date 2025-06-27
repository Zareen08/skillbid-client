import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TaskCards from './TaskCards';
import FaqsSec from './FaqsSec';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';
import Categories from './Categorites';
import Newsletter from './NewsLetter';
import TrustedBy from './TrustedBy';

const Home = () => {
  const { tasks: initialTasks, categories: initialCategories } = useLoaderData();
  const [tasks, setTasks] = useState(initialTasks);
  const [categories] = useState(initialCategories);

  return (
    <div>
      
      <Banner />
      <WhyChooseUs />
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5f5a7c] mb-4">Task Categories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore tasks by category and find work that fits your skillset.
          </p>
        </div>

        <div className="mt-5 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <Categories
              key={cat._id}
              cats={cat}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div>
      </div>

      
      <div>
        <div className="p-12 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5f5a7c] mb-4">Featured Tasks</h1>
        </div>
        <div className="mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {tasks.map((task) => (
            <TaskCards key={task._id} task={task} tasks={tasks} setTasks={setTasks} />
          ))}
        </div>
      </div>
       <TrustedBy/>
      <Newsletter />
      <FaqsSec />
    </div>
  );
};

export default Home;
