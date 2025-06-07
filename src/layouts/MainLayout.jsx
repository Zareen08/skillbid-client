import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;