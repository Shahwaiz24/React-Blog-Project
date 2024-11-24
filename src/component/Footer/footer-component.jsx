import React from "react";
import InstaIcon from "../Footer/footer-images/instagram.png"
import FaceIcon from "../Footer/footer-images/facebook.png"
import YoutubeIcon from "../Footer/footer-images/youtube.png"
import VisaLogo from "../Footer/footer-images/payment-image/visa.png"
import AmericanExpressLogo from "../Footer/footer-images/payment-image/american-express.png"
import ApplePayLogo from "../Footer/footer-images/payment-image/ApplePay.png"
import MasterCardLogo from "../Footer/footer-images/payment-image/Mastercard.png"
import PaypalLogo from "../Footer/footer-images/payment-image/paypal.png"
import StripeLogo from "../Footer/footer-images/payment-image/Stripe.png"



export default function FooterComponent() {

    const paymentLogos = [
        VisaLogo,
        AmericanExpressLogo,
        StripeLogo,
        ApplePayLogo,
        PaypalLogo,
        MasterCardLogo
    ];
    return (
        <div className="w-full h-fit bg-black pb-44 px-8 sm:px-16 md:px-32 lg:px-24 xl:px-40 pt-20">
 <div className="w-full h-full flex justify-between">
            <div className="text-start ">
                <h1 className="text-white font-poppins font-medium text-xl">3legant.
                </h1>
                <h1 className="pt-5 text-white font-poppins font-medium text-xl">
                More than just a game. <br /> It’s a lifestyle.
                </h1>
                <div className="pt-8 flex justify-start gap-8">
                <img src={InstaIcon} alt="" />
                <img src={FaceIcon} alt="" />               <img src={YoutubeIcon} alt="" />

                </div>

            </div>
            <div className="flex justify-between">
                <div className="text-white text-start flex flex-col gap-7 px-10">
                    <h1 className="font-poppins font-medium text-lg">
                    Page
                    </h1>
                    <h1 className="font-poppins font-normal text-sm pt-5">
                    Home
                    </h1>
                    <h1 className="font-poppins font-normal text-sm">
                    Shop
                    </h1>
                    <h1 className="font-poppins font-normal text-sm">
                    Product
                    </h1><h1 className="font-poppins font-normal text-sm">
                    Articles
                    </h1>
                    <h1 className="font-poppins font-normal text-sm">
                    Contact Us
                    </h1>
                </div>
                <div className="text-white text-start flex flex-col gap-7 px-10">
                    <h1 className="font-poppins font-medium text-lg">
                    Info
                    </h1>
                    <h1 className="font-poppins font-normal text-sm pt-5">
                    Shipping Policy
                    </h1>
                    <h1 className="font-poppins font-normal text-sm">
                    Return & Refund
                    </h1>
                    <h1 className="font-poppins font-normal text-sm">
                    Support
                    </h1><h1 className="font-poppins font-normal text-sm">
                    FAQs
                    </h1>
                    
                </div>
                <div className="text-white text-start flex flex-col gap-4 px-10">
                    <h1 className="font-poppins font-medium text-lg">
                    Office
                    </h1>
                    <h1 className="font-poppins font-normal text-sm pt-7">
                    43111 Hai Trieu street,
                    </h1>
                    <h1 className="font-poppins font-normal text-sm">
                    District 1, HCMC
                    </h1>
                    <h1 className="font-poppins font-normal text-sm">
                    Vietnam
                    </h1><h1 className="font-poppins font-normal text-sm">
                    84-756-3237
                    </h1>
                   
                </div>

            </div>

           
        </div>
        <div className="border-y border-customFooterGray mt-5">
            
        </div>
        <div className="flex justify-start mt-10">
        <div className="border-x h-6 border-customFooterGray  "></div>
        <div className="flex pl-5 flex-row justify-between">
            <div className="text-customFooterGray flex font-poppins font-normal text-sm">
                <h1>
                Privacy Policy
                </h1>
                <h1 className="pl-5">
                Terms & Conditions
                </h1>
            </div>
            <div>

            </div>
        </div>

        </div>
        </div>
       
    );
}