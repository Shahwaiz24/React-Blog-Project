import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  HomeBannerImage1,
  HomeBannerImage2,
  HomeBannerImage3,
  HomeBannerImage4,
  ButtonComponent,
  ProductCardComponent,
  CardSliderComponent,
} from ".";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function HomeComponent() {
  const [showLoginFoam, setShowLoginFoam] = useState(false);
  const bannerImages = [
    HomeBannerImage1,
    HomeBannerImage2,
    HomeBannerImage3,
    HomeBannerImage4
  ];
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
let bannerImageIndex = 1;

  const isLogin = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  // Intersection Observer for Banner Section
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Intersection Observer for Products Section
  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  let handleOnShoppingClick = async () => {
    let checking = await checkLogin();
    if (!checking) {
      setShowLoginFoam(false);
      navigate("/login");
    } else {
      console.log("User is Logged In");
    }
  };

  useEffect(() => {
    bannerImageIndex = Math.floor(Math.random() * bannerImages.length);
    if (isLogin) {
      setShowLoginFoam(false);
      console.log("Login is True");
    } else {
      setShowLoginFoam(true);
      console.log("User Not Logged In, Showing Foam");
    }
  }, []);

  return (
    <div className="h-full w-full">
      {/* First Banner Container */}
      <div
        ref={bannerRef}
        className={`relative w-full max-h-fit transform transition-all duration-500 ${
          bannerInView ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        {/* Background Image */}
        <img
          src={bannerImages[bannerImageIndex]}
          alt="Banner"
          className="w-full h-auto object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
          <div
            className={`flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 space-y-5 transform transition-all duration-700 delay-300 ${
              bannerInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-medium font-poppins leading-tight">
              More than <br />
              just a game.<br />
              It’s a lifestyle.
            </h1>

            <p className="text-gray-300 font-poppins font-light text-sm sm:text-base md:text-lg lg:text-xl">
              Whether you’re just starting out, have played{" "}
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

      {/* Slider Container */}
      <div
        ref={productsRef}
        className={`transform transition-all duration-1000 ${
          productsInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
     
        <div className="flex px-4 sm:px-8 md:px-16 lg:px-32 pt-8 justify-between">
          <h1 className="font-bold font-poppins text-3xl text-black">
            Featured
          </h1>
          <Link to={""}>
            <h1 className="underline font-poppins font-light text-customNavGreen text-base">
              View all.
            </h1>
          </Link>
        </div>
       
        <div className="max-h-fit w-full pl-4 sm:pl-8 md:pl-16 lg:pl-32">
          <CardSliderComponent products={products} />
        </div>
      </div>
    </div>
  );
}
