import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/Icon/arrow.svg"

const AttractionItem = ({ item }) => {
    const description = item.description

    return (
        <div className="relative top-10 z-[100]  mb-10  lg:pl-10 px-2 lg:px-0">
            <h2 className="pb-10 text-5xl lg:ml-container font-primary ">Top Attractions</h2>
            <div className="">
                <div
                    className="object-right h-auto py-24 mr-0 text-white bg-center bg-cover lg:ml-container "
                    style={{ backgroundImage: `url(${item.image})`, height: "600px" }}
                >
                    <div className="absolute bottom-0 w-10/12 p-10 text-black bg-white md:w-2/5 2xl:w-3/12">

                        <div>
                            <h2 className="text-4xl uppercase font-primary text-bold">{item.name}</h2>
                            <p className="py-5">{description?.slice(0, 150)}</p>
                        </div>
                        <div className="flex items-start text-8xl">
                            <Link
                                to={`/destinations/${item.id}`}
                                className=""
                            >
                                <img className="w-3/12" src={arrow} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
};

export default AttractionItem;
