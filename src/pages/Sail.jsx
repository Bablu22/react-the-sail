import React from "react";
import Button from "../components/common/Button";
import logo from "../assets/images/logo/logo.svg";
import { SAIL_DATA } from "../data/sail";

const Sail = () => {
    return (
        <div className="bg-[#F1F5F8]  py-10  relative ">
            <div className="lg:grid grid-cols-12 gap-4 container mt-16  p-5 mx-auto md:mt-28 lg:mt-20 bg-white md:p-20 lg:w-3/4 w-11/12">
                <div className="col-span-12 p-5 sm:col-span-8">
                    {SAIL_DATA.map((item) => (
                        <div
                            key={item.id}
                            className="lg:flex justify-between mb-20 lg:space-x-20"
                        >
                            <h2 className="text-3xl font-primary">{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
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

export default Sail;
