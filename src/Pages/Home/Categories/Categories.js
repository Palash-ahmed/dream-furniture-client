import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/products-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])

    return (
        <div className='my-12'>
            <div>
                <h2 className="text-4xl mb-12 font-bold text-primary text-center">Categories</h2>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        categories.map(allCategories => <Category 
                            key={allCategories.id}
                            allCategories={allCategories}
                        ></Category>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Categories;