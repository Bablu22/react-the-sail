import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const BannerItem = ({ item }) => {
    return (
        <div className="relative top-20 z-[100] ">
            <div className="">
                <div
                    className="object-fill h-auto py-24 text-white bg-center bg-cover "
                    style={{ backgroundImage: `url(${item.image})`, height: "700px" }}
                >
                    <div className="container px-10 mx-auto">
                        <div className="absolute w-10/12 p-10 text-black bg-white lg:w-2/5 2xl:w-3/12 md:top-1/4">
                            <p className="pb-5 text-sm">{item.subHeading}</p>
                            <Link to="/tour-itinerary">
                                <p className="pb-5 text-xl uppercase md:text-4xl font-primary text-sail">
                                    {item.heading}
                                </p>
                            </Link>
                            <p className="mb-10 text-xl font-bold leading-none md:text-3xl">
                                {item.duration}
                            </p>
                            <div className="flex items-start space-x-5">
                                <Button title="book now" path="/contact" />
                                <Link
                                    to="/tour-itinerary"
                                    className="px-8 py-2 text-lg font-bold tracking-widest uppercase bg-white border-2 border-gray-200 text-header1 font-primary "
                                >
                                    learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
};

export default BannerItem;
