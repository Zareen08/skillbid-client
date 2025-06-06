import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const task = useLoaderData();
    console.log(task);
    return (
        <div>
            
        </div>
    );
};

export default Home;