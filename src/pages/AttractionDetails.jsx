import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/common/Button";
import { TOP_ATTRACTIONS } from "../data/attraction";
import logo from "../assets/images/logo/logo.svg";

const AttractionDetails = () => {
    const { id } = useParams();
    const destination = TOP_ATTRACTIONS.find((item) => item.id === id);
    
    return (
        <div className="bg-[#F1F5F8]  py-10  relative ">
            <div className="container grid w-full h-screen grid-cols-12 gap-4 p-1 mx-auto mt-20 bg-white md:w-3/4">
                <div className="col-span-12 p-5 sm:col-span-8">
                    <img src={destination.image} alt="" />
                    <h2 className="mt-10 text-3xl font-primary text-bold">
                        {destination.name}
                    </h2>
                    <p className="pt-10">{destination.description}</p>
                </div>
                <div className="col-span-12 px-5 py-6 sm:col-span-4 ">
                    <div className="flex flex-col items-center px-5 py-10 space-y-10 border">
                        <img src={logo} className="w-full" alt="" />

                        <p className="text-lg">
                            Enjoy unforgettable moments with 'The Sail'
                        </p>
                        <Button path="/contact" title="book now" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttractionDetails;
