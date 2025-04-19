import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <div className='md:w-11/12 2xl:w-10/12 mx-auto'>
                <Navbar />
            </div>
            <div className='w-11/12 2xl:w-10/12 mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;