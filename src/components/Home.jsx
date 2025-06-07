import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TaskCards from './TaskCards';
import FaqsSec from './FaqsSec';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    const initialTasks = useLoaderData();
    const [tasks, setTasks] = useState(initialTasks);

    console.log(tasks);
    return (
       <div>

        <div>
            <Banner></Banner>
        </div>
         <div>
            <div className='p-12 text-center space-y-4'>
                    <h1 className='text-4xl md:text-6xl'>Featured Tasks</h1>
                </div>
            <div className='mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                
                {
                    tasks.map(task=> <TaskCards 
                    key={task._id}
                    tasks={tasks} 
                    setTasks={setTasks}
                    task={task}></TaskCards>)
                }
            </div>
        </div>
        <div>
            <WhyChooseUs></WhyChooseUs>
        </div>
        <div >
            <FaqsSec></FaqsSec>
        </div>
       </div>
    );
};

export default Home;