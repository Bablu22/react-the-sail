import React, { Fragment } from 'react'
import Banner from '../components/home/Banner'
import ChooseUs from '../components/home/ChooseUs'
import Feature from '../components/home/Feature'
import FeedBack from '../components/home/FeedBack'
import Memories from '../components/home/Memories'
import PaymentMethod from '../components/home/PaymentMethod'
import TopAttractions from '../components/home/TopAttractions'

const Home = () => {
    return (
        <Fragment>
            <Banner />
            <Feature />
            <TopAttractions />
            <ChooseUs />
            <FeedBack />
            <Memories />
            <PaymentMethod />
        </Fragment>
    )
}

export default Home


