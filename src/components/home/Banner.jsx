import React, { Fragment } from "react";
import Slider from "react-slick";
import { BANNER_DATA } from "../../data/banner";
import BannerItem from "./BannerItem";

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <Fragment>
            <div>
                <Slider {...settings}>
                    {BANNER_DATA.map((item) => (
                        <BannerItem key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
        </Fragment>
    );
};

export default Banner;
