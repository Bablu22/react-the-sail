import React, { Fragment } from "react";
import image from "../../assets/images/home/feature.jpg";
import Button from "../common/Button";

const Feature = () => {
    return (
        <Fragment>
            <div className="container mx-auto my-20">
                <div className="items-center justify-between lg:space-x-10 space-y-8 flex flex-col-reverse lg:flex-row">
                    <div className="">
                        <div className="md:flex justify-between items-center lg:block  px-2 lg:px-10">
                            <h1 className="mb-8 text-5xl leading-tight font-primary text-header1">
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
