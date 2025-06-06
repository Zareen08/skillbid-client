import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCards from './TaskCards';

const Home = () => {
    const tasks = useLoaderData();
    console.log(tasks);
    return (
        <div>
            <div className='mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    tasks.map(task=> <TaskCards key={task._id} task={task}></TaskCards>)
                }
            </div>
        </div>
    );
};

export default Home;