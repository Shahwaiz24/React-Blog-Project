import React, { useEffect, useState } from "react";
import OfferBanner from "../Offer Banner/offer_banner_img.png";
import { ButtonComponent } from "../Home";
import "./banner.css"

export default function OfferBannerComponent({ img = OfferBanner }) {
    const [timeRemaining, setTimeRemaining] = useState(["", "", ""]);

    useEffect(() => {
        // Function to calculate remaining time
        const calculateRemainingTime = () => {
            const now = new Date();
            const target = new Date();

            target.setHours(22, 3, 0, 0); // Set target time to 10:03 PM today

            if (now > target) {
                // If it's already past 10:03 PM, set target time to 10:03 PM tomorrow
                target.setDate(target.getDate() + 1);
            }

            const timeDiff = target - now; // Difference in milliseconds

            const hours = Math.floor(timeDiff / (1000 * 60 * 60)).toString();
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)).toString();
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000).toString();

            setTimeRemaining([hours, minutes, seconds]);
        };

        // Update time every second
        const intervalId = setInterval(calculateRemainingTime, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-fit max-height flex  flex-col md:flex-row justify-start">
            {/* Left Image */}
            <div className="w-full md:w-6/12 h-auto ">
    <img 
        src={img} 
        alt="" 
                    className="object-cover w-full h-auto max-w-full max-h-full " 
    />
</div>


            {/* Right Content */}
            <div className="bg-customBgOfferBanner px-5 sm:px-10 md:px-20  sm:py-16 md:py-24 flex flex-col justify-start w-full md:w-6/12">
                <h1 className="text-customNavGreen font-poppins font-semibold text-base sm:text-lg md:text-xl lg:text-2xl pb-4">
                    Limited Edition
                </h1>
                <h1 className="text-white font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-5">
                    Hurry up! 30% OFF
                </h1>
                <h1 className="text-gray-400 font-poppins font-light text-sm sm:text-lg md:text-xl pb-6">
                    Find clubs that are right for your game
                </h1>
                <h1 className="text-white font-poppins font-normal text-sm sm:text-lg md:text-xl pb-4">
                    Offer expires in:
                </h1>

                {/* Time Remaining */}
                <div className="flex flex-wrap justify-start gap-4 pb-10">
                    {timeRemaining.map((value, index) => (
                        <div key={index} className="bg-white text-center p-4 sm:p-5 md:p-6 rounded-lg shadow-md">
                            <h1 className="font-poppins font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
                                {value}
                            </h1>
                        </div>
                    ))}
                </div>

                <ButtonComponent
                    className="w-max bg-customNavGreen hover:bg-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    children={
                        <h1 className="px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 font-poppins font-medium text-sm sm:text-base md:text-lg">
                            Shop now
                        </h1>
                    }
                ></ButtonComponent>
            </div>
        </div>
    );
}
