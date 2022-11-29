import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/Banner/banner1.jpg';

const Banner = () => {
    return (
        <div className="hero p-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Find Your Dream Furniture</h1>
                    <p className="py-6">Explore Second Hand Furnitures As Per Your Requirements & Choice. <br /> Whether you just moved into a new home or looking to revamp your current one. <br /> <br /> we at Furnix Furniture are here to inspire you with affordable <br /> home furniture solutions, there is a piece of furniture to every corner of <br /> your home. Create a home that is perfect for you.</p>
                    <Link to='/'><button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;