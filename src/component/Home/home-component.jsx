import React from "react";
import { HomeBannerImage, ButtonComponent } from ".";

export default function HomeComponent() {
    return (
        <div className="h-full w-full">
            <div className="relative w-full max-h-fit">
                {/* Background Image */}
                <img
                    src={HomeBannerImage}
                    alt="Banner"
                    className="w-full h-auto object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
                    <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 space-y-5">
                        {/* Responsive Heading */}
                        <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-medium font-poppins leading-tight">
                            More than <br />
                            just a game.<br />
                            It’s a lifestyle.
                        </h1>

                        {/* Responsive Paragraph */}
                        <p className="text-gray-300 font-poppins font-light text-sm sm:text-base md:text-lg lg:text-xl">
                            Whether you’re just starting out, have played <br className="hidden md:block" />
                            your whole life or you're a Tour pro, your <br className="hidden md:block" />
                            swing is like a fingerprint.
                        </p>

                        {/* Responsive Button */}
                        <ButtonComponent
                            className="w-max mt-5 bg-white hover:bg-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            children={
                                <h1 className="px-6 sm:px-10 md:px-16 py-2 sm:py-3 md:py-4 font-poppins font-medium text-xs sm:text-sm md:text-lg">
                                    Shopping Now
                                </h1>
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                console.log("Tap");
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
