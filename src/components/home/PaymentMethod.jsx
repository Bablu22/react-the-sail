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
        <div className="container px-10 mx-auto mt-48 mb-20">
            <div className="md:space-x-48 md:flex">
                <h2 className="px-10 text-3xl font-primary">payment methods</h2>
                <div className="flex flex-wrap md:space-x-3 md:flex-nowrap">
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
