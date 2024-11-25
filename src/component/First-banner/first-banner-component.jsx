import React from "react";
import { ButtonComponent } from "../Home";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "../global.css"

export default function FirstBannerComponent({img, islogin}){
  const navigate = useNavigate();
  let handleOnShoppingClick = async () => {
 
    if (!islogin) {
      navigate("/login");

    } else {
      console.log("User is Logged In");
    }
  };
  
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
 
    return (
      <div className="w-full h-full">
            <div
        ref={bannerRef}
        className={`relative w-full  max-h-fit transform transition-all duration-500 ${bannerInView ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
      >
        

          <div className="home-background w-full h-full flex items-center justify-start py-32 ">
          <div
              className={`flex flex-col justify-center px-4 max-w-screen-xl sm:px-8 md:px-16 lg:px-32 space-y-5 transform transition-all duration-700 delay-300 ${bannerInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}>
             
                <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-medium font-poppins leading-tight">
                  More than <br />
                  just a game.<br />
                  It’s a lifestyle.
                </h1>

                <p className="text-gray-300 font-poppins font-light text-sm sm:text-base md:text-lg lg:text-xl">
                  Whether you’re just starting out, have played {" "}
                  <br className="hidden md:block" />
                  your whole life or you're a Tour pro, your{" "}
                  <br className="hidden md:block" />
                  swing is like a fingerprint.
                </p>

                {/* Responsive Button */}
                <ButtonComponent
                  className="w-max mt-5 hover:bg-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  children={
                    <h1 className="px-6 sm:px-10 md:px-16 py-2 sm:py-3 md:py-4 font-poppins font-medium text-xs sm:text-sm md:text-lg">
                      Shopping Now
                    </h1>
                  }
                  onClickbtn={(e) => {
                    e.preventDefault();
                    handleOnShoppingClick();
                  }}
                />
    
          </div>
        </div>
      </div>

        </div>
        
    );
}