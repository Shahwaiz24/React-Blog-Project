import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
                    <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="flex flex-row items-center justify-between p-4">
                            <Link to="/" className="text-xl font-poppins font-medium tracking-widest text-black  rounded-lg focus:outline-none focus:shadow-outline">
                                3legant.
                            </Link>
                            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                    <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <nav className={`flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
                            
                            <Link to="/" className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg ${isActive('')}`}>
                                Home
                            </Link>
                            <Link to="/" className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg ${isActive('')}`}>
                                Shop
                            </Link>
                            <Link to="/" className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg ${isActive('')}`}>
                                Product
                            </Link>
                            <Link to="/" className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg ${isActive('')}`}>
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
