import React from "react";
import { MEMORIES_IMAGE } from "../data/memories";

const Gallery = () => {
    return (
        <div className="bg-[#F1F5F8]  py-10">
            <div className="container w-full px-5 mx-auto mt-20 bg-white md:p-20 md:w-3/4">
                <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
                    {MEMORIES_IMAGE.map((item) => (
                        <div key={item.id} className="relative">
                            <div className="max-w-sm px-2 pt-6 pb-2 transition duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105">
                                <img className="w-full rounded-xl" src={item.image} alt="Colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
