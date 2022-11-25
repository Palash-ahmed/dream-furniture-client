import React from 'react';
import { Link } from 'react-router-dom';

const AllCategories = ({allCategories}) => {

    const {img, name} = allCategories;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <Link to={`/category/${allCategories.id}`}><img src={img} alt="" className=" rounded-xl" /></Link>
            </figure>
            <div className="card-body items-center text-center">
                <Link to={`/category/${allCategories.id}`}><h1 className="card-title text-3xl link link-hover">{name}</h1></Link>
            </div>
        </div>
    );
};

export default AllCategories;