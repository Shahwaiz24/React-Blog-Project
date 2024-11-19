import React from 'react';

function CardSliderComponent({ products }) {
    return (
        <div className="relative mx-auto bg-gray-100 p-2 sm:p-4">
            <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
            </div>

            <div
                className="relative h-80 w-full overflow-x-auto scroll-smooth"
                style={{
                    scrollSnapType: 'x mandatory',
                    scrollPadding: '0 20px',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none', 
                }}
            >
                <div
                    className="flex space-x-4"
                    style={{
                        minWidth: `calc(280px * ${products.length})`, // Ensures all cards are placed in a row
                    }}
                >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="w-64 bg-white rounded-lg shadow-md flex-shrink-0 snap-start" // Use snap-start to align to start
                            style={{
                                scrollSnapAlign: 'start', // Makes the scroll snap to each card
                            }}
                        >
                            <img
                                src={"https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"}
                                alt={product.title}
                                className="rounded-t-lg w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-700">{product.title}</h2>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <p className="text-lg font-bold text-gray-900">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardSliderComponent;
