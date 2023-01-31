import React, { Fragment } from 'react'
import Slider from 'react-slick';
import { TOP_ATTRACTIONS } from "../../data/attraction"
import AttractionItem from './AttractionItem';

const TopAttractions = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Fragment>
            <div id="top_attraction">
                <Slider {...settings}>
                    {TOP_ATTRACTIONS.map((item) => (
                        <AttractionItem key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
        </Fragment>
    )
}

export default TopAttractions



