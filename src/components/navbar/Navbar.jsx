import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const LinkStyle = ({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : '';


    const [menu, setMenu] = useState(false);
    return (
        <div>
            <nav className='bg-green-200 md:bg-inherit px-6 py-4 md:py-15 flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>
                    Book Vibe
                </h1>
                <div className='md:hidden cursor-pointer' onClick={() => setMenu(!menu)}>
                    {
                        menu?<X/>: <Menu/>
                    }
                </div>
               <ul className={`md:hidden flex flex-col gap-6 absolute duration-500 bg-green-200 text-center py-6 px-6 w-full ${menu ? 'top-17 left-0': '-top-full'}`}>
               <li>
                        <NavLink to='/' className={LinkStyle}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/listedBooks' className={LinkStyle}>
                            Listed Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/pagesRead' className={LinkStyle}>
                            Pages to Read
                        </NavLink>
                    </li>
               </ul>
                <ul className='hidden md:flex gap-8 text-[#13131380] text-lg'>
                    <li>
                        <NavLink to='/' className={LinkStyle}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/listedBooks' className={LinkStyle}>
                            Listed Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/pagesRead' className={LinkStyle}>
                            Pages to Read
                        </NavLink>
                    </li>
                </ul>
                <div className='hidden md:flex gap-4 text-lg font-semibold text-white'>
                    <button className='px-6 py-3 bg-[#23BE0A] rounded-lg'>
                        Sign In
                    </button>
                    <button className='px-6 py-3 bg-[#59C6D2] rounded-lg'>
                        Sign Up
                    </button>
                </div>
            </nav>
          
        </div>
    );
};

export default Navbar;