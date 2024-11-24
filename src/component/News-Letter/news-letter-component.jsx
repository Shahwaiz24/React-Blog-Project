import React, { useState } from "react";
import NewsLetterbgImage from "../News-Letter/news-letter-images/news-letter.png";

export default function NewsLetterComponent({ img = NewsLetterbgImage }) {
    const [emailField, setEmailField] = useState("");
    return (
        <div className="w-full relative h-fit pt-10 lg:pt-20">
            {/* Background Image */}
            <div className="w-full h-fit">
                <img src={img} alt="Newsletter Background" className="w-full object-cover h-auto" />
            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                {/* Heading */}
                <h1 className="text-white font-bold font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Join Our Newsletter
                </h1>

                {/* Subtitle */}
                <p className="pt-2 font-poppins font-light text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    Sign up for deals, new products and promotions
                </p>

                {/* Input Field */}
                <div className="flex items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3  sm:pt-2 md:pt-4 lg:pt-6  border-b border-white py-4">
                    {/* Email Icon */}
                    <span className="text-white text-lg sm:text-xl pr-4">
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
                    <button className="text-white font-poppins text-sm sm:text-base lg:text-lg pl-4">
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
}
