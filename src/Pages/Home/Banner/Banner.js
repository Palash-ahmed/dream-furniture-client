import React from 'react';
import bannerImage from '../../../assets/Banner/banner1.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero p-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;