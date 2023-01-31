import React, { Fragment } from "react";
import { MEMORIES_IMAGE } from "../../data/memories";

const Memories = () => {

    return (
        <Fragment>
            <div id="mb-96">
                <div className="relative top-20 z-[10]   w-full pl-10">
                    <h2 className="pb-10 text-5xl text-center uppercase font-primary">
                        some memories
                    </h2>
                    <div className="">
                        <div className="mr-0 text-black ml-container">
                            <div className="grid items-center justify-center w-full grid-flow-row grid-cols-2 gap-2 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ">
                                {MEMORIES_IMAGE.map((item) => (
                                    <div key={item.id}>
                                        <img src={item.image} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Memories;
