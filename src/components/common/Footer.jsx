import React from "react";
import FooterContact from "../footer/FooterContact";
import logo from "../../assets/images/logo/logo-white.svg";
import FooterSocial from "../footer/FooterSocial";
import image1 from "../../assets/images/home/footer/1.svg"
import image2 from "../../assets/images/home/footer/2.svg"
import image3 from "../../assets/images/home/footer/3.svg"
import image4 from "../../assets/images/home/footer/4.svg"

const Footer = () => {
    return (
        <div id="footer">
            <div className="max-w-4xl py-10 mx-auto text-white">
                <div className="text-center">
                    <div className="items-center justify-between px-10 my-10 md:flex">
                        <div>
                            <FooterContact />
                        </div>
                        <div className="flex items-center mt-10 md:mt-0">
                            <img src={logo} alt="" className="w-20" />
                            <h2 className="text-xl text-left font-primary">The Sail <br /> Shipping Ltd.</h2>
                        </div>
                        <div className="">
                            <FooterSocial />

                        </div>
                    </div>
                </div>
            </div>
            <hr className="max-w-full mx-0" />
            <div className="max-w-4xl py-10 mx-auto text-white">
                <div className="grid items-center justify-center w-full grid-flow-row grid-cols-2 gap-2 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ">
                    <img src={image1} alt="" className="w-20" />
                    <img src={image2} alt="" className="w-20" />
                    <img src={image3} alt="" className="w-20" />
                    <img src={image4} alt="" className="w-20" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
