import React from 'react';
import living from '../../../assets/living.png'
import table from '../../../assets/table.jpg'

const Section = () => {
    return (
        <div className="hero my-20">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={living} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                        <img src={table} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="my-2 text-5xl mt-12 font-bold">Explore our furniture & home furnishing range</h1>
                        <p className="py-2 text-2xl font-bold">Furnix Furniture is a bangladeshi leader in life at home.</p>
                        <p className="py-2">Whether you just moved into a new home or looking to revamp your current one, we at Furnix Furniture are here to inspire you with affordable home furniture solutions, there is a piece of furniture to every corner of your home. Create a home that is perfect for you.</p>
                        <p className="py-2">Shopping at Furnix Furniture is a bit different and exciting compared to your shopping at an everyday retail. It is about experiencing solutions first hand and getting to know ideas and inspirations that can fit perfectly into your home. That’s why, we offer more than thousand products, solutions at our store along with home furnishing ideas and services for you to explore.</p>
                        <p className="py-2">Since most Furnix Furniture is flat-packed, they are quite easy to bring home when you buy from the store.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;