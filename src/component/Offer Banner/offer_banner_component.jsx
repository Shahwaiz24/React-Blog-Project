import React, { useEffect, useState } from "react";
import OfferBanner from "../Offer Banner/offer_banner_img.png";
import { ButtonComponent } from "../Home";

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
        <div className="w-full h-fit flex flex-col md:flex-row justify-start">
            {/* Left Image */}
            <div className="w-full md:w-6/12 h-fit">
                <img src={img} alt="" className="object-contain h-full w-full" />
            </div>

            {/* Right Content */}
            <div className="bg-customBgOfferBanner pb-5 pl-8 md:pl-20 pt-16 md:pt-24 flex flex-col justify-start w-full md:w-6/12">
                <h1 className="text-customNavGreen font-poppins font-semibold text-lg sm:text-xl md:text-2xl pb-4">
                    Limited Edition
                </h1>
                <h1 className="text-white font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl pb-5">
                    Hurry up! 30% OFF
                </h1>
                <h1 className="text-gray-400 font-poppins font-extralight text-lg sm:text-xl pb-6">
                    Find clubs that are right for your game
                </h1>
                <h1 className="text-white font-poppins font-normal text-lg sm:text-xl pb-2">
                    Offer expires in:
                </h1>

                {/* Time Remaining */}
                <div className="flex-wrap pb-10 flex justify-start gap-4">
                    {timeRemaining.map((value, index) => {
                        return (
                            <div key={index} className="bg-white text-center p-6 rounded-lg">
                                <h1 className="font-poppins font-medium text-2xl sm:text-3xl md:text-4xl">{value}</h1>
                            </div>
                        );
                    })}
                </div>
                <ButtonComponent className="w-max  hover:bg-gray-200  rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    children={
                        <h1 className="px-8 sm:px-10 md:px-16 py-0 sm:py-3 md:py-4 font-poppins font-medium text-xs sm:text-sm md:text-lg">
                            Shop now
                        </h1>}></ ButtonComponent>
            </div>
        </div>
    );
}
