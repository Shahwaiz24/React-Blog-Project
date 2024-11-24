import React from "react";
import CollectionImage from "../Shop Collection/collection-img/collection-image.png";
import menCollectionImage from "../Shop Collection/collection-img/men-collection.png";
import womenCollectionImage from "../Shop Collection/collection-img/womens-collection.png";

const collections = [
  {
    name: "Men’s Set",
    image: menCollectionImage, // Replace with your image URL
  },
  {
    name: "Women’s Set",
    image: womenCollectionImage, // Replace with your image URL
  },
];

const ShopCollection = () => {
  return (
    <div className="w-full h-fit pt-20 px-4 md:px-20 lg:px-60">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-8 text-center md:text-left">
        Shop Collection
      </h2>

      {/* Grid */}
      <div className="flex flex-col md:flex-row gap-8 w-full h-fit">
        {/* First Collection */}
        <div className="relative h-fit w-full md:w-2/4 rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-gray-100">
          {/* Image */}
          <img src={CollectionImage}
            alt="Juniors Set"
            className="w-full h-full object-contain"
          />

          {/* Text Overlay */}
          <div className="absolute bottom-10 px-10">
            {/* Title */}
            <h1 className="font-poppins font-bold text-xl md:text-1xl text-black">
              Juniors Set
            </h1>

            {/* Subtext */}
            <h2 className="font-poppins font-medium text-sm md:text-base text-black-300">
              Collections →
            </h2>
            <h1 className={`border-b-2 border-black w-28`}></h1>
          </div>
        </div>

        {/* Collections Loop */}
        <div className="flex flex-col gap-5 w-full md:w-2/4">
          {collections.map((collect, index) => {
            return (
              <div
                key={index}
                className="relative h-fit overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-gray-100"
              >
                {/* Image */}
                <img
                  src={collect.image}
                  alt={collect.name}
                  className="w-full h-full object-contain"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-10 left-0 right-0 px-10">
                  {/* Title */}
                  <h1 className="font-poppins font-bold text-xl md:text-1xl text-black">
                    {collect.name}
                  </h1>

                  {/* Subtext */}
                  <h2 className="font-poppins font-medium text-sm md:text-base text-black-300">
                    Collections →
                  </h2>
                  <h1 className={`border-b-2 border-black w-28`}></h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
