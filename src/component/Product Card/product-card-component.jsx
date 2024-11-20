import React from "react";
import AirPods from "../Product Card/airpods.png";

export default function ProductCardComponent({
    title = "Shark - Men's cabretta white golf glove",
    price = "19.00",
    descrip = "",
    img = AirPods,
    rating = 2.5,
}) {
    return (
        <div className="relative flex flex-col p-4 w-52 sm:w-64 md:w-72 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            {/* Image */}
            <div className="mt-4 bg-customBgProduct h-52 w-full sm:h-64 md:h-72 lg:h-80">
                <img
                    src={img}
                    alt="card-image"
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Content */}
            <div className="mt-4 space-y-2">
                {/* Rating */}
                <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ${
                                index < Math.round(rating)
                                    ? "text-yellow-500"
                                    : "text-customRatingStarNonFill"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .587l3.668 7.431L24 9.174l-6 5.851 1.414 8.242L12 18.865l-7.414 4.402L6 15.025 0 9.174l8.332-1.156z" />
                        </svg>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold font-poppins sm:text-lg md:text-lg">
                    {title}
                </h3>

                {/* Price */}
                <p className="text-base font-bold font-poppins text-gray-900 sm:text-lg md:text-xl">
                    ${price}
                </p>
            </div>
        </div>
    );
}
