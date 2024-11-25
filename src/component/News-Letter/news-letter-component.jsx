import React, { useState } from "react";
import "../global.css"

export default function NewsLetterComponent({ }) {
    const [emailField, setEmailField] = useState("");

    return (
        <div className="w-full h-fit mt-10 py-32 home-letter-background ">
            {/* Background Image */}
           

            {/* Center Content */}
            <div className=" home-max-res flex flex-col justify-center items-center text-center px-4 bg-black bg-opacity-0">
                {/* Heading */}
                <h1 className="text-white font-bold font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Join Our Newsletter
                </h1>

                {/* Subtitle */}
                <p className="pt-2 font-poppins font-light text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-lg">
                    Sign up for deals, new products, and promotions
                </p>

                {/* Input Field */}
                <div className="flex items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mt-4 border-b border-white py-2">
                    {/* Email Icon */}
                    <span className="text-white text-lg sm:text-xl pr-3">
                        <i className="fas fa-envelope"></i>
                    </span>

                    {/* Email Input */}
                    <input
                        type="email"
                        value={emailField}
                        onChange={(e) => setEmailField(e.target.value)}
                        placeholder="Email address"
                        className="bg-transparent text-white flex-grow outline-none font-poppins text-sm sm:text-base md:text-lg lg:text-xl placeholder-white"
                    />

                    {/* Signup Button */}
                    <button className="text-white font-poppins text-sm sm:text-base lg:text-lg pl-4 hover:underline">
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
}
