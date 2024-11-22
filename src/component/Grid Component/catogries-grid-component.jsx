import React from "react";
import AirPods from "../Grid Component/golf_pack.png";

export default function CatogriesGridComponent({ catogires, img = AirPods }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {catogires.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-center items-center bg-gray-100"
                >
                    <div className="h-96 w-full">
                        <img src={img} alt="" className="object-contain w-full h-full" />
                    </div>

                    <h1
                        className="pb-4 sm:pb-6 md:pb-8 lg:pb-10 font-poppins font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
                    >
                        {item.title}
                    </h1>

                </div>
            ))}
        </div>
    );
}
