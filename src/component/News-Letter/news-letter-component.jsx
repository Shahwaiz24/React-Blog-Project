import React, { useState } from "react";
import NewsLetterbgImage from "../News-Letter/news-letter-images/news-letter.png";

export default function NewsLetterComponent({ img = NewsLetterbgImage }) {
    const [emailField, setEmailField] = useState("");
    return (
        <div className="w-full relative h-fit">
            <div className="w-full h-fit">
                <img src={img} alt="" className="w-full object-contain h-auto" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-white font-bold font-poppins text-2xl">
                    Join Our Newsletter
                </h1>
                <p className="pt-2 font-poppins font-light text-white text-lg">
                    Sign up for deals, new products and promotions
                </p>

                {/* Input field with email icon and signup text */}
                <div className="flex items-center w-2/5 mt-4 border-b border-white py-4">
                    <span className="text-white text-lg pr-4">
                        <i className="fas fa-envelope"></i> {/* Email Icon */}
                    </span>
                    <input
                        type="email"
                        value={emailField}
                        onChange={(e)=> setEmailField(e.target.value)}
                        placeholder="Email address"
                        className="bg-transparent text-white flex-grow outline-none font-poppins text-base placeholder-white"
                    />
                    <button className="text-white font-poppins text-base pl-4">
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
}
