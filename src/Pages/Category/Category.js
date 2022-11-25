import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';

const Category = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Category;