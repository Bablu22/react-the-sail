import React from "react";
import logo from "../assets/images/logo/logo.svg";
import Button from "../components/common/Button";
import { FEATURE_DATA } from "../data/feature";

const Feature = () => {
    return (
        <div className="bg-[#F1F5F8]  py-10  relative ">
            <div className=" lg:grid grid-cols-12 gap-4 container mt-16  p-5 mx-auto md:mt-28 lg:mt-20 bg-white md:p-20 lg:w-3/4 w-11/12">
                <div className="col-span-12 p-5 sm:col-span-8">
                    {FEATURE_DATA.map((item) => (
                        <div key={item.id} className="lg:flex justify-between mb-20 lg:space-x-20">
                            <h2 className="text-3xl font-primary">Safety</h2>
                            <p>
                                Safety coupled with comfort was our prime concern from the very
                                first day of our inception of idea of building a tourist vessel
                                and this remained focused throughout the construction feature.
                                But safety is a continuous process and need monitoring,
                                evaluation and improvement on a regular basis. The vessel is
                                manned by well trained staff and at present under the command of
                                a master who used to work for Bangladesh Navy. The vessel and
                                every voyage of her will be monitored by ex-ship’s captain to
                                ensure the safety of the vessel and the passenger.
                            </p>
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

export default Feature;
