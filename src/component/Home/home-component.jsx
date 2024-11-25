import React, { useState, useEffect } from "react";
import {
  HomeBannerImage1,
  HomeBannerImage2,
  HomeBannerImage3,
  HomeBannerImage4,
  ShopCollection,} from ".";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import CatogriesGridComponent from "../Grid Component/catogries-grid-component";
import OfferBannerComponent from "../Offer Banner/offer_banner_component";
import LatestArticleComponent from "../Article/latest-article-component";
import NewsLetterComponent from "../News-Letter/news-letter-component";
import InstagramNewsFeedComponent from "../Instagram-NewsFeed/instagram-newsfeed-component";
import FirstBannerComponent from "../First-banner/first-banner-component";
import SliderComponent from "../Slider Component/slider-component";

export default function HomeComponent() {
  const bannerImages = [
    HomeBannerImage1,
    HomeBannerImage2,
    HomeBannerImage3,
    HomeBannerImage4
  ];
  const catogries = [
    {
      title:"Golf Clubs"
    },
    {
      title: "Golf Balls"
    },
    {
      title: "Golf Bags"
    }, {
      title: "Clothing & Rainwear"
    }, {
      title: "Footwear"
    }, {
      title: "Accessories"
    }
  ]
  const products = [
    {
      title: "Wireless Headphones",
      price: 59.99,
      image: "https://via.placeholder.com/250?text=Headphones",
      description: "High-quality wireless headphones with noise-cancelling features for an immersive listening experience."
    },
    {
      title: "Smartwatch",
      price: 129.99,
      image: "https://via.placeholder.com/250?text=Smartwatch",
      description: "Stylish smartwatch with fitness tracking, heart rate monitor, and smartphone notifications."
    },
    {
      title: "Gaming Mouse",
      price: 39.99,
      image: "https://via.placeholder.com/250?text=Gaming+Mouse",
      description: "Precision gaming mouse with customizable RGB lighting and adjustable DPI settings."
    },
    {
      title: "Mechanical Keyboard",
      price: 89.99,
      image: "https://via.placeholder.com/250?text=Keyboard",
      description: "Durable mechanical keyboard with RGB lighting and quiet, responsive keys perfect for gaming or typing."
    },
    {
      title: "4K Monitor",
      price: 299.99,
      image: "https://via.placeholder.com/250?text=Monitor",
      description: "Ultra-clear 4K monitor with vibrant colors and high refresh rate for an enhanced viewing experience."
    },
    {
      title: "Smartphone",
      price: 699.99,
      image: "https://via.placeholder.com/250?text=Smartphone",
      description: "Flagship smartphone with a powerful camera, long-lasting battery, and lightning-fast performance."
    },
    {
      title: "Laptop Stand",
      price: 25.99,
      image: "https://via.placeholder.com/250?text=Laptop+Stand",
      description: "Adjustable laptop stand for comfortable viewing and ergonomic positioning during long work hours."
    },
    {
      title: "USB-C Hub",
      price: 34.99,
      image: "https://via.placeholder.com/250?text=USB-C+Hub",
      description: "Versatile USB-C hub with multiple ports for connecting your devices, including HDMI and USB-A."
    },
    {
      title: "Portable Speaker",
      price: 49.99,
      image: "https://via.placeholder.com/250?text=Speaker",
      description: "Compact and portable Bluetooth speaker with rich sound quality, perfect for outdoor use."
    },
    {
      title: "Webcam",
      price: 74.99,
      image: "https://via.placeholder.com/250?text=Webcam",
      description: "High-definition webcam with built-in microphone for crystal-clear video calls."
    },
    {
      title: "External Hard Drive",
      price: 99.99,
      image: "https://via.placeholder.com/250?text=Hard+Drive",
      description: "Large-capacity external hard drive for quick and reliable file storage and backups."
    },
    {
      title: "Smart Light Bulb",
      price: 15.99,
      image: "https://via.placeholder.com/250?text=Light+Bulb",
      description: "Energy-efficient smart bulb with adjustable color temperature and voice control compatibility."
    },
    {
      title: "Fitness Tracker",
      price: 49.99,
      image: "https://via.placeholder.com/250?text=Fitness+Tracker",
      description: "Fitness tracker with heart rate monitor, step counter, and sleep tracking for a healthier lifestyle."
    },
    {
      title: "Bluetooth Keyboard",
      price: 39.99,
      image: "https://via.placeholder.com/250?text=Bluetooth+Keyboard",
      description: "Wireless Bluetooth keyboard for seamless connection with tablets, laptops, and mobile devices."
    },
    {
      title: "VR Headset",
      price: 249.99,
      image: "https://via.placeholder.com/250?text=VR+Headset",
      description: "Immersive virtual reality headset for gaming, entertainment, and 360-degree video experiences."
    },
    {
      title: "Drone",
      price: 499.99,
      image: "https://via.placeholder.com/250?text=Drone",
      description: "High-performance drone with a 4K camera for stunning aerial footage and easy navigation."
    },
    {
      title: "Power Bank",
      price: 19.99,
      image: "https://via.placeholder.com/250?text=Power+Bank",
      description: "Compact power bank with fast charging capabilities to keep your devices powered on the go."
    },
    {
      title: "E-Reader",
      price: 119.99,
      image: "https://via.placeholder.com/250?text=E-Reader",
      description: "Portable e-reader with an anti-glare screen, perfect for reading anywhere, day or night."
    },
    {
      title: "Gaming Chair",
      price: 199.99,
      image: "https://via.placeholder.com/250?text=Gaming+Chair",
      description: "Ergonomically designed gaming chair with adjustable height, lumbar support, and comfortable padding."
    },
    {
      title: "Noise-Cancelling Earbuds",
      price: 79.99,
      image: "https://via.placeholder.com/250?text=Earbuds",
      description: "True wireless earbuds with noise-cancelling technology for an immersive music experience."
    },
  ];
  let     bannerImageIndex = Math.floor(Math.random() * bannerImages.length);


  const isLogin = useSelector((state) => state.auth.status);






  useEffect(() => {
    bannerImageIndex = Math.floor(Math.random() * bannerImages.length);
    console.log("Banner Image Index : ", bannerImageIndex);
    if (isLogin) {
      console.log("Login is True");
    } else {
      console.log("User Not Logged In, Showing Foam");
    }
  }, []);

  return (
    <div className="h-full w-full">
      {/* First Banner Container */}
      <div className="w-full h-fit">
      <FirstBannerComponent img={bannerImages[bannerImageIndex]} islogin={isLogin}></FirstBannerComponent>
      </div>
     

      {/* Slider Container */}
      <div className="w-full h-fit">
        <SliderComponent products={products}></SliderComponent>

      </div>
      {/* Catogries Section */}
      <div className="w-full h-fit bg-white text-center pt-20 pb-10 px-40">
        <h1 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl pb-8 sm:pb-12 md:pb-16 text-center">
          Shop by Categories
        </h1>

        <CatogriesGridComponent catogires={catogries}></CatogriesGridComponent>

      </div>
      {/* Offer Section */}
      <div className="w-full h-fit">
        <OfferBannerComponent></OfferBannerComponent>
      </div>
      {/* Collection Section */}
      <div  className="w-full h-fit">
<ShopCollection>

</ShopCollection>
      </div>
      <div className="w-full h-fit">
        <LatestArticleComponent>

        </LatestArticleComponent>
      </div>
      <div className="w-full h-fit">
        <NewsLetterComponent></NewsLetterComponent>

      </div>

      <div className="w-full h-fit">
        <InstagramNewsFeedComponent></InstagramNewsFeedComponent>

      </div>
    </div>
  );
}
