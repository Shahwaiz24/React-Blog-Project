import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { CardSliderComponent } from "../Home";
import "../global.css"

export default function SliderComponent({products}){
    const { ref: productsRef, inView: productsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    return (
      <div className="w-full home-max-res h-full">
             <div
        ref={productsRef}
        className={`transform transition-all duration-1000 ${productsInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
      >

          <div className="flex px-4 sm:px-8 md:px-16 lg:px-32 pt-8  justify-between">
          <h1 className="font-bold font-poppins text-3xl text-black">
            Featured
          </h1>
          <Link to={""}>
            <h1 className="underline font-poppins font-light text-customNavGreen text-base">
              View all.
            </h1>
          </Link>
        </div>

        <div className="max-h-fit   ">
          <CardSliderComponent products={products} />
        </div>
      </div>
        </div>
    );
}