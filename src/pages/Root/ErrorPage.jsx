import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>
                Ohh no! The page is not found
            </h1>
            <h3 className='mt-3 text-lg font-semibold text-gray-600'>
                You lost the way? don't worry.
            </h3>
            <p className='text-base font-medium text-blue-500 mt-4'>
                Back to the available page
            </p>
            <button className='px-3 py-1.5 bg-blue-600 text-white mt-5 rounded cursor-pointer' onClick={() => navigate('/')}>
                Back page
            </button>
        </div>
    );
};

export default ErrorPage;