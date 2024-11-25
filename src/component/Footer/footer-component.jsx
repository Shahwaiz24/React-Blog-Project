import React from "react";
import InstaIcon from "../Footer/footer-images/instagram.png";
import FaceIcon from "../Footer/footer-images/facebook.png";
import YoutubeIcon from "../Footer/footer-images/youtube.png";
import VisaLogo from "../Footer/footer-images/payment-image/visa.png";
import "../global.css"
import AmericanExpressLogo from "../Footer/footer-images/payment-image/american-express.png";
import ApplePayLogo from "../Footer/footer-images/payment-image/ApplePay.png";
import MasterCardLogo from "../Footer/footer-images/payment-image/Mastercard.png";
import PaypalLogo from "../Footer/footer-images/payment-image/paypal.png";
import StripeLogo from "../Footer/footer-images/payment-image/Stripe.png";

export default function FooterComponent() {
    const paymentLogos = [
        VisaLogo,
        AmericanExpressLogo,
        StripeLogo,
        ApplePayLogo,
        PaypalLogo,
        MasterCardLogo,
    ];

    return (
        <div className="w-full  h-fit bg-black pb-10 px-6 sm:px-12 lg:px-20 xl:px-28 pt-20">
            {/* Top Section */}
            <div className="home-max-res">
                <div className="flex flex-wrap md:flex-nowrap gap-10">
                    {/* Left Section */}
                    <div className="w-full md:w-1/3 text-start">
                        <h1 className="text-white font-poppins font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            3legant.
                        </h1>
                        <h1 className="pt-5 text-white font-poppins font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
                            More than just a game. <br /> It’s a lifestyle.
                        </h1>
                        <div className="pt-8 flex gap-6">
                            <img
                                src={InstaIcon}
                                alt="Instagram"
                                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            />
                            <img
                                src={FaceIcon}
                                alt="Facebook"
                                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            />
                            <img
                                src={YoutubeIcon}
                                alt="YouTube"
                                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            />
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-wrap sm:justify-center md:justify-end gap-10 w-full md:w-2/3">
                        <div className="text-white flex flex-col gap-4">
                            <h1 className="font-poppins font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
                                Page
                            </h1>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Home</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Shop</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Product</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Articles</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Contact Us</p>
                        </div>
                        <div className="text-white flex flex-col gap-4">
                            <h1 className="font-poppins font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
                                Info
                            </h1>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Shipping Policy</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Return & Refund</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Support</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">FAQs</p>
                        </div>
                        <div className="text-white flex flex-col gap-4">
                            <h1 className="font-poppins font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
                                Office
                            </h1>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">43111 Hai Trieu street,</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">District 1, HCMC</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">Vietnam</p>
                            <p className="font-poppins font-normal text-sm sm:text-base md:text-lg">84-756-3237</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-y border-customFooterGray mt-10"></div>

                {/* Bottom Section */}
                <div className="flex flex-wrap justify-between items-center mt-10 gap-6">
                    <div className="text-customFooterGray flex font-poppins font-normal text-xs sm:text-sm md:text-base gap-5">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="flex gap-5 flex-wrap">
                        {paymentLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="bg-white p-2 sm:p-3 rounded-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center"
                            >
                                <img src={logo} alt={`Payment method ${index}`} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
          </div>
        </div>
    );
}
