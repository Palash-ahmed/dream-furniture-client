import React, { useEffect, useState } from 'react';
import AllCategories from './AllCategories';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='my-12'>
            <div>
                <h2 className="text-4xl mb-12 font-bold text-primary text-center">Categories</h2>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        categories.map(allCategories => <AllCategories
                            key={allCategories.id}
                            allCategories={allCategories}
                        ></AllCategories>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Categories;