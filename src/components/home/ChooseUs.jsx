import React from "react";
import backgroundWrapper from "../../assets/images/home/aaa.png";
import imaeg1 from "../../assets/images/home/choose1.svg";
import imaeg2 from "../../assets/images/home/choose2.svg";
import imaeg3 from "../../assets/images/home/choose3.svg";
import imaeg4 from "../../assets/images/home/choose4.svg";

const ChooseUs = () => {
    return (
        <div className="choose_us_section">
            <div className="bottom_wrapper">
                <img src={backgroundWrapper} alt="" />
            </div>

            <div className="container px-10 mx-auto">
                <div className="justify-between md:flex md:space-x-28 ">
                    <div className="flex flex-col md:w-1/4">
                        <div className="justify-between p-2 px-5 mb-6 bg-gradient-to-r via-header1 from-header1 to-header3 sm:flex sm:justify-start">
                            <img src={imaeg1} alt="choose" className="w-16 rounded-lg " />
                            <div className="flex items-center justify-between w-full sm:ml-4">
                                <h2 className="text-lg text-white">Ultimate Flexibility</h2>
                            </div>
                        </div>
                        <div className="justify-between p-2 px-5 mb-6 bg-white sm:flex sm:justify-start">
                            <img src={imaeg2} alt="choose" className="w-16 rounded-lg " />
                            <div className="flex items-center justify-between w-full sm:ml-4">
                                <h2 className="text-lg text-black">Ultimate Flexibility</h2>
                            </div>
                        </div>
                        <div className="justify-between p-2 px-5 mb-6 bg-white sm:flex sm:justify-start">
                            <img src={imaeg3} alt="choose" className="w-16 rounded-lg " />
                            <div className="flex items-center justify-between w-full sm:ml-4">
                                <h2 className="text-lg text-black">Ultimate Flexibility</h2>
                            </div>
                        </div>
                        <div className="justify-between p-4 px-5 mb-6 bg-white shadow-md sm:flex sm:justify-start">
                            <img src={imaeg4} alt="choose" className="w-16 rounded-lg " />
                            <div className="flex items-center justify-between w-full sm:ml-4">
                                <h2 className="text-lg text-black">Ultimate Flexibility</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center md:text-right md:w-1/3">
                        <h2 className="pb-8 text-5xl font-primary">WHY CHOOSE US?</h2>
                        <p>
                            “The Sail” is a hundred and twenty feet long, and twenty three
                            feet wide cute lady constructed of brand new imported steel
                            capable to swim in the rivers for a continuous five days while
                            carrying only forty eight of her lovers inside her cabins.
                            <br /> <br />
                            She has plenty of open spaces all around her for those who loves
                            to enjoy the beauty of the nature while relaxing in the fresh air.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
