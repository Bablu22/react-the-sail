import React, { Fragment } from "react";
import image from "../../assets/images/home/feature.jpg";
import Button from "../common/Button";

const Feature = () => {
    return (
        <Fragment>
            <div className="container mx-auto my-20">
                <div className="flex flex-col-reverse items-center justify-between space-y-8 lg:space-x-10 lg:flex-row">
                    <div className="">
                        <div className="items-center justify-between px-2 md:flex lg:block lg:px-10">
                            <h1 className="w-full mb-8 text-5xl leading-tight md:w-9/12 lg:w-full font-primary text-header1">
                                <span className="text-sail">Sundarbans,</span> <br /> The
                                Largest Mangrove Forest In the World
                            </h1>
                            <Button title="Learn more" path="/tour-itinerary" />
                        </div>
                    </div>
                    <div className="w-full">
                        <img className="" src={image} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Feature;
