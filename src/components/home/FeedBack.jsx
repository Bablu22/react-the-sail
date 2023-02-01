import React, { Fragment } from "react";
import Slider from "react-slick";
import { CLIENT_FEED_BACK } from "../../data/feedback";
import FeedbackItem from "./FeedbackItem";

const FeedBack = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <Fragment>
            <div id="client_feedback">
                <div className="relative top-20 z-[10]   w-full lg:pl-10 px-2">
                    <h2 className="ml-container pb-10 text-5xl font-primary">
                        Client Feedback
                    </h2>

                    <div className="mr-0 text-black lg:ml-container overflow-hidden">
                        <Slider {...settings}>
                            {CLIENT_FEED_BACK.map((item) => (
                                <FeedbackItem key={item.id} item={item} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FeedBack;
