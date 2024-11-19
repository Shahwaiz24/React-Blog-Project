import React from "react";
import { HomeBannerImage ,ButtonComponent} from ".";

export default function HomeComponent() {
    return (
        <div className="h-full w-full">
            <div className="relative w-full max-h-fit">
                <img src={HomeBannerImage} alt="Banner" className="w-full h-auto" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
                    <div className="flex flex-col pl-32" >
                        <h1 className="text-white text-7xl font-medium font-poppins">More than <br />
                            just a game.<br />
                            It’s a lifestyle.</h1>
                        <p className="pt-5 text-gray-300 font-poppins font-light">
                            Whether you’re just starting out, have played <br /> your whole life or you're a Tour pro, your <br /> swing is like a fingerprint.
                        </p>
                        <ButtonComponent className="w-max mt-5" children={<h1 className="px-20 py-4 font-poppins font-medium text-lg">Shopping Now</h1>} onClick={(e) => {
                            e.preventDefault();
                            console.log("Tap")
                        }}>
                        </ButtonComponent></div>
                  
                </div>
            </div>
        </div>
    );
}
