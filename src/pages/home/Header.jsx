import React from 'react';
import headerimg from '../../assets/books.jpg'
const Header = () => {
    
    return (
        <div className='mt-12 md:mt-0 lg:min-h-[60vh] bg-[#13131310] rounded-3xl justify-between flex md:flex-row flex-col-reverse px-32 items-center gap-8 py-8 lg:py-0'>
            <div className='flex flex-col justify-center items-center mt-6 md:mt-0 md:block'>
                <h1 className='text-center md:text-left text-2xl lg:text-6xl mb-4 lg:mb-12 font-bold'>
                Books to freshen up your bookshelf
                </h1>
                <button className='px-3 py-1.5 lg:px-8 lg:py-4 text-base lg:text-xl font-bold rounded-lg text-white bg-[#23BE0A] cursor-pointer'>
                    View The List
                </button>
            </div>
            <img className='w-full md:w-2/5 lg:w-5/12 object-cover rounded' src={headerimg} alt="" />
        </div>
    );
};

export default Header;