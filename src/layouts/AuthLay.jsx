import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const AuthLay = () => {
    return (
        
        <div>
            <header className='mx-auto w-11/12'>
            <Header></Header>
            </header>
            <main className='w-11/12 mx-auto'>
             <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default AuthLay;