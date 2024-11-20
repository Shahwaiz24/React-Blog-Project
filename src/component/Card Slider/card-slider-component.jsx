import React from 'react';
import { ProductCardComponent } from '../Home';

function CardSliderComponent({ products }) {
    return (
        <div className="relative mx-auto ">
            <div className=" absolute right-5 top-5 z-10 rounded-full bg-gray-600  text-center text-sm text-white">
            </div>

            <div
                className="relative h-fit w-full overflow-x-auto scroll-smooth"
                style={{
                    scrollSnapType: 'x mandatory',
                    scrollPadding: '0 20px',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none', 
                }}
            >
                <div
                    className="flex space-x-7"
                    style={{
                        minWidth: `calc(280px * ${products.length})`,
                    }}
                >
                    {products.map((product, index) => (

                        <div
                            key={index}
                            className="w-64 flex-shrink-0 snap-start"
                            style={{
                                scrollSnapAlign: 'start', 
                            }}
                        >
                        <ProductCardComponent title={product.title} price={product.price} descrip={product.description}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardSliderComponent;
