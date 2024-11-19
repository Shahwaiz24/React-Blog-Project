import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { mobileIcon, closeIcon,searchIcon,userCircle,shoppingBag } from './index';  // Make sure your icons are correctly imported

export default function HeaderComponent() {
    const [open, setOpen] = useState(false);
    const location = useLocation(); 

    const [isMobile, setMobile] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? 'text-customNavGreen' : 'hover:text-customNavGreen';
    };
    const isInMobile = () => {
        setMobile(true)
    }

    return (
        <div >
            <div className="antialiased bg-gray-100">
                <div className="w-full text-gray-700 bg-white">
                    <div className={`flex justify-between items-center max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 pt-5 pb-5`}>
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
                            </Link>
                            <Link to="/">
                                <img src={userCircle} alt="User Icon" className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                            <Link to="/">
                                <img src={shoppingBag} alt="Shopping Bag Icon" className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline "
                            onClick={() => setOpen(true)}
                  
                        >
                           
                            <img
                                src={open ? closeIcon : mobileIcon} 
                                alt="Menu Icon"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div className="absolute top-0 left-0 w-full h-full bg-white p-4 md:hidden">
                    <div className="flex justify-end">
                        <button
                            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                            onClick={() => setOpen(false)}
                            style={{ paddingTop: "10px" }}
                        >
                            
                            <img
                                src={ closeIcon } 
                                alt="Menu Icon"
                                className="w-5 h-5"
                            />
                        </button>
                    </div>

                    <div className="flex flex-col items-center space-y-5 pt-20">
                        <Link to="/" className={`text-sm font-poppins font-light text-black ${isActive('')}`}>
                            Home
                        </Link>
                        <Link to="/" className={`text-sm font-poppins font-light text-black ${isActive('')}`}>
                            Shop
                        </Link>
                        <Link to="/" className={`text-sm font-poppins font-light text-black ${isActive('')}`}>
                            Product
                        </Link>
                        <Link to="/" className={`text-sm font-poppins font-light text-black ${isActive('')}`}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
