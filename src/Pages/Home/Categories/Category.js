import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({allCategories}) => {
    const {image, name} = allCategories;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <Link to='/products'><img src={image} alt="" className="h-1/2 rounded-xl" /></Link>
            </figure>
            <div className="card-body items-center text-center">
                <Link to={`/category/${allCategories.id}`}><h1 className="card-title text-3xl">{name}</h1></Link>
            </div>
        </div>
    );
};

export default Category;