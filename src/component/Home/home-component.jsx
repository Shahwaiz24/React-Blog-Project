import React from "react";
import { HomeBannerImage } from ".";

export default function HomeComponent() {
    return (
        <div className="h-full w-full">
            <div className="relative w-full max-h-fit">
                <img src={HomeBannerImage} alt="Banner" className="w-full h-auto" />


                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
                    <div className="flex flex-col pl-32" >
                        <h1 className="text-white text-4xl font-bold">sdsdsd</h1>

                        
</div>
                </div>
            </div>
        </div>
    );
}
