import React from "react";
import image1 from "../../assets/images/home/payment/amex.svg"
import image2 from "../../assets/images/home/payment/bkash.svg"
import image3 from "../../assets/images/home/payment/dbb.svg"
import image4 from "../../assets/images/home/payment/mastercard.svg"
import image5 from "../../assets/images/home/payment/nagad.svg"
import image6 from "../../assets/images/home/payment/upay.svg"
import image7 from "../../assets/images/home/payment/visa.svg"

const PaymentMethod = () => {
    return (
        <div className="px-2 mx-auto mt-48 mb-20 lg:px-0 ml-container">
            <div className="lg:space-x-20 lg:flex">
                <h2 className="pb-5 text-3xl lg:px-10 font-primary">payment methods</h2>
                <div className="flex flex-wrap justify-between space-y-2 md:space-y-0 md:space-x-3 md:flex-nowrap">
                    <img src={image1} alt="" className="w-24 md:w-full" />
                    <img src={image2} alt="" className="w-24 md:w-full" />
                    <img src={image3} alt="" className="w-24 md:w-full" />
                    <img src={image4} alt="" className="w-24 md:w-full" />
                    <img src={image5} alt="" className="w-24 md:w-full" />
                    <img src={image6} alt="" className="w-24 md:w-full" />
                    <img src={image7} alt="" className="w-24 md:w-full" />
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
