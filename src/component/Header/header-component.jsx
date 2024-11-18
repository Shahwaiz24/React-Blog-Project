import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { searchIcon, shoppingBag, userCircle } from './index';

export default function HeaderComponent() {
    const [open, setOpen] = useState(false);
    const location = useLocation(); // To get the current path

    // Function to check if the link is active
    const isActive = (path) => {
        return location.pathname === path ? 'text-customNavGreen' : 'hover:text-customNavGreen';
    };

    return (
        <div className="min-h-screen">
            <div className="antialiased bg-gray-100">
                <div className="w-full text-gray-700 bg-white">
                    {/* This flex container will keep the layout in row for all screen sizes */}
                    <div className="flex justify-between items-center max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">

                        {/* Left section - 3legant text */}
                        <div className="flex items-center justify-start">
                            <Link to="/" className="text-xl font-poppins font-medium tracking-widest text-black rounded-lg focus:outline-none focus:shadow-outline">
                                3legant.
                            </Link>
                        </div>

                        {/* Center section - Navigation Menu */}
                        <nav className={`flex-grow justify-center items-center space-x-4 md:flex-row md:space-x-6 ${open ? 'flex' : 'hidden'} md:flex`}>
                            <Link to="/" className={`px-4 py-2 mt-2 text-sm font-poppins font-light text-black bg-transparent rounded-lg ${isActive('')}`}>
                                Home
                            </Link>
                            <Link to="/" className={`px-4 py-2 mt-2 font-poppins font-light text-sm bg-transparent text-black rounded-lg ${isActive('')}`}>
                                Shop
                            </Link>
                            <Link to="/" className={`px-4 py-2 mt-2 text-sm  font-poppins font-light bg-transparent text-black rounded-lg ${isActive('')}`}>
                                Product
                            </Link>
                            <Link to="/" className={`px-4 py-2 mt-2 text-sm font-poppins font-light text-black bg-transparent rounded-lg ${isActive('')}`}>
                                Contact Us
                            </Link>
                        </nav>

                        {/* Right section - Icons (Visible on medium screens and larger) */}
                        <div className="flex gap-2 items-center justify-end hidden md:flex">
                            <Link to="/">
                                <img src={searchIcon} alt="Search Icon" className={`w-5 h-5 md:w-6 md:h-6`} />
                            
                            </Link >
                            <Link to="/">
                                <img src={userCircle} alt="User Icon" className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                            <Link to="/">
                                <img src={shoppingBag} alt="Shopping Bag Icon" className="w-5 h-5 md:w-6 md:h-6" /></Link>
                        </div>

                        {/* Mobile menu button */}
                        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
