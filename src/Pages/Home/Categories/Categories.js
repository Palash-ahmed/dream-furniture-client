import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import AllCategories from './AllCategories';

const Categories = () => {


    const { data:categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async() =>{
         const res = await fetch('http://localhost:5000/categories');
         const data = await res.json();
         return data
        }
    });
    
    if(isLoading){
        return <Loading></Loading>
    }

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