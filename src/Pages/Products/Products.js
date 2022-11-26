import React from 'react';
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";

const Products = ({ product, setSelectedProduct }) => {

    const { title, image_url, total_view, rating, author, resale_price, original_price, description, condition, years_of_use } = product;

    return (
            <div className="card lg:w-[900px] mx-auto bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="" className='w-full lg:h-[500px]' /></figure>
                <p className='font-bold mt-2 pl-4'>Published date: {author.published_date}</p>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <div className='flex mt-2'>
                        <p className='flex font-bold'>Rating: <FaStar className='mx-4 text-warning text-2xl'></FaStar> <span className='text-xl font-bold'>{rating.number}</span></p>
                        <p className='font-bold'>Total View: <span className='text-xl font-bold'>{total_view}</span></p>
                    </div>
                    <p className='my-4'>{description}</p>
                    <p className=' font-bold'>Condition: <span className='text-xl'>{condition}</span></p>
                    <p className=' font-bold'>Uses: <span className='text-xl'>{years_of_use}</span></p>
                    <div className=' flex my-4'>
                        <p className="text-xl font-bold">Price: <span className='text-2xl font-bold'>{resale_price}</span></p>
                        <p className='font-bold'>Original Price: <span className='text-xl font-bold line-through'>{original_price}</span></p>
                    </div>
                    <div className='flex mt-4'>
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
                        <div className="card-actions justify-end">
                            <label onClick={() => setSelectedProduct(product)} htmlFor="booking-modal"className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Now</label>
                        </div>
                </div>
            </div>
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