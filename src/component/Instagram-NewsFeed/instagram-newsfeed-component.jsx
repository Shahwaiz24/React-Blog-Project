import React from "react";
import NewsFeedPic from "../Instagram-NewsFeed/instagram-feed-images/last-section-img.png";
import "../global.css"

export default function InstagramNewsFeedComponent({ img = NewsFeedPic }) {
    return (
        <div className="w-full h-fit pt-8 bg-white">
            {/* Text Section */}
            <div className="text-center home-max-res px-4 sm:px-8 lg:px-16">
                {/* Newsfeed Title */}
                <h1 className="font-poppins font-bold text-base sm:text-lg md:text-xl lg:text-xl text-gray-500">
                    Newsfeed
                </h1>

                {/* Instagram Title */}
                <h1 className="pt-5 font-poppins font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-black">
                    Instagram
                </h1>

                {/* Subtitle */}
                <h1 className="pt-4 font-poppins font-light text-sm sm:text-base md:text-lg lg:text-xl ">
                    Follow us on social media for more discounts & promotions
                </h1>

                {/* Instagram Handle */}
                <h1 className="pt-4 font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
                    @3legant_official
                </h1>
            </div>

            {/* Image Section */}
            
                <img
                    src={img}
                    alt="Instagram Feed"
                className="w-full max-height  pt-5 h-auto object-cover"
                />
        
        </div>
    );
}
