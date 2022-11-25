import React from 'react';
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';

const Products = ({ product }) => {

    const { _id, title, image_url, total_view, rating, author, resale_price } = product;

    return (
        <Link to={`/productsdetails/${_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="" className='h-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <div className='flex mt-2'>
                        <p className='flex'>Rating: <FaStar className='mx-4 text-warning text-2xl'></FaStar> <strong>{rating.number}</strong></p>
                        <p>Total View: <strong>{total_view}</strong></p>
                    </div>
                    <div className='my-4'>
                        <h2 className="text-xl">Price: <span className='text-2xl font-bold'>${resale_price}</span></h2>
                    </div>
                    <div className='flex'>
                        <div className="avatar ">
                            <div className="w-16 h-16 rounded-full">
                                <img src={author.img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h3 className='ml-5 flex text-xl font-bold'> {author.name} <TiTick className='ml-2 bg-blue-500 border text-white text-xl mt-2 border-blue-500 rounded-full'></TiTick> </h3>
                            <h3 className='flex mx-4 '><MdLocationPin className='text-xl mt-3'></MdLocationPin><strong className='text-gray-500 text-xl mt-2'>{author.location}</strong></h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        // <div className="card card-side mb-4 bg-base-100 border-solid border border-black shadow-xl">
        //     <div className='w-1/4'>
        //         <figure><img src={image_url} alt="Movie" className='w-full p-5 rounded-xl' /></figure>
        //     </div>
        //     <div className="card-body w-3/4">
        //         <h2 className="card-title text-4xl">{title}</h2>
        //         <div className='flex'>
        //             <p className='flex'>Rating: <FaStar className='mx-4 text-warning text-2xl'></FaStar> <strong>{rating.number}</strong></p>
        //             <p>Total View: <strong>{total_view}</strong></p>
        //         </div>
        //         <div className='my-12'>
        //             <h2 className="text-xl">Price: <span className='text-2xl font-bold'>${resale_price}</span></h2>
        //         </div>
        //         <div className='flex'>
        //             <div className="avatar ">
        //                 <div className="w-12 rounded-full">
        //                     <img src={author.img} alt='' />
        //                 </div>
        //             </div>
        //             <div>
        //                 <h3 className='ml-5 flex text-xl'>Published by:<strong className='text-2xl font-bold ml-2 text-red-500'>{author.name}</strong> <TiTick className='ml-2 bg-blue-500 border text-white text-xl mt-2 border-blue-500 rounded-full'></TiTick> </h3>
        //                 <h3 className='flex mx-4 '><MdLocationPin className='text-xl mt-3'></MdLocationPin><strong className='text-gray-500 text-xl mt-2'>{author.location}</strong></h3>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Products;