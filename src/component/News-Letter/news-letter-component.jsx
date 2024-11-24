import React from "react";
import NewsLetterbgImage from "../News-Letter/news-letter-images/news-letter.png";

export default function NewsLetterComponent({ img = NewsLetterbgImage }) {
    return (
        <div
            className="w-full relative h-fit"
            
        >
            <div className="w-full h-fit">
                <img src={img} alt="" className="w-full object-contain h-auto" />
            </div>
            {/* Ensure the content inside determines the height */}
            <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-white font-bold text-2xl md:text-4xl">
                    Hhashdasd
                </h1>
            </div>


        </div>
    );
}
