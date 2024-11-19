import React from "react";

export default function ProductCardComponent({
    title,
    price,
    descrip,
    img = "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
}) {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white rounded-xl shadow-md">
            <div className="relative  mt-4 overflow-hidden text-gray-700 bg-white rounded-xl h-48 w-full">
                <img
                    src={img}
                    alt="card-image"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{descrip}</p>
                <p className="text-xl font-bold text-gray-900">${price}</p>
            </div>
        </div>
    );
}
