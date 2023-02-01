import React from 'react'
import Button from '../components/common/Button'
import logo from "../assets/images/logo/logo.svg";
import { ITINERARY_DATA } from "../data/itinerary"

const Itinerary = () => {
    return (
        <div className="bg-[#F1F5F8]  py-10  relative ">
            <div className="lg:grid grid-cols-12 gap-4 container mt-16  p-5 mx-auto md:mt-28 lg:mt-20 bg-white md:p-20 lg:w-3/4 w-11/12">

                <div className="col-span-12 p-5 sm:col-span-8">
                    <div className='w-full mb-20'>
                        <h2 className='pb-5 text-2xl font-primary'>Overview</h2>
                        <p>Explore the World’s largest mangrove forest with comfort and convenience with 'The Sail'. Spend three (3) days And two (2) nights to see the picturesque beauty of this UNESCO heritage site. Witness the exotic wildlife of the majestic forest like chitra deer, monkey, wild boar, crocodile, etc along with the exotic species of trees like Sundori, Golpata, Gawa etc. Get the opportunity to spot the biggest attraction of the land - the Royal Bengal Tiger. Get the chance to experience the eerie night beauty of the place while cruising through the forest. With 'The Sail', experience the wilderness of the forest comfortably in a fully air-conditioned cruise with a fulfilling culinary experience.</p>
                    </div>
                    {ITINERARY_DATA.map((item) => (
                        <div key={item.id} className="lg:flex justify-between mb-20 lg:space-x-20">
                            <h2 className="text-3xl font-primary">{item.name}</h2>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="col-span-12 px-5 py-6 sm:col-span-4 ">
                    <div className="flex flex-col items-center px-5 py-10 space-y-10 border">
                        <img src={logo} className="w-full" alt="" />

                        <p className="text-lg">
                            Enjoy unforgettable moments with 'The Sail'
                        </p>
                        <Button path="/contact" title="book now" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary


