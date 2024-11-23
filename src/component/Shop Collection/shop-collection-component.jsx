import React from "react";
import CollectionImage from "../Shop Collection/collection-img/collection-image.png"
import menCollectionImage from "../Shop Collection/collection-img/men-collection.png"
import womenCollectionImage from "../Shop Collection/collection-img/womens-collection.png"



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
    <div className="w-full h-fit">
      {/* Heading */}
      <h2 className="text-4xl font-medium font-poppins mb-8">Shop Collection</h2>



      {/* Grid */}
      <div className="flex flex-row gap-8 w-full ">
      <div className="relative h-fit  overflow-hidden rounded-lg">
  {/* Image */}
  <img
    src={CollectionImage}
    alt="Juniors Set"
    className="w-full h-full object-contain"
  />

  {/* Text Overlay */}
  <div className="absolute bottom-10 px-10">
    {/* Title */}
    <h1 className="font-poppins font-bold text-2xl text-black">
      Juniors Set
    </h1>

    {/* Subtext */}
    
    <h1 className="font-poppins font-medium text-base text-black-300">
      Collections →
    </h1>
    <h1 className={`border-b-2 border-black w-28 `}></h1>


  </div>
</div>
<div className="flex flex-col gap-5 justify-between">
{collections.map((collect, index) =>{
    return <div key={index} className="relative h-80 overflow-hidden rounded-lg">
    {/* Image */}
    <img
      src={collect.image}
      alt="Juniors Set"
      className="w-full h-full object-contain"
    />
  
    {/* Text Overlay */}
    <div className="absolute bottom-10 left-0 right-0 px-10">
      {/* Title */}
      <h1 className="font-poppins font-bold text-2xl text-black">
        {collect.name}
      </h1>
  
      {/* Subtext */}
      
      <h1 className="font-poppins font-medium text-base text-black-300">
        Collections →
      </h1>
      <h1 className={`border-b-2 border-black w-28 `}></h1>
  
  
    </div>
  </div>
})}
</div>


</div>

      
   
   
    </div>
  );
};

export default ShopCollection;


