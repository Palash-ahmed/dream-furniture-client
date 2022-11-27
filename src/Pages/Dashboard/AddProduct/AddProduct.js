import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageUploadKey = process.env.REACT_APP_imagebb_key;
    const { data: newProducts, isLoading } = useQuery({
        queryKey: ['newProduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriesNewProduct');
            const data = await res.json();
            return data;
        }
    })
    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageUploadKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url)
                    const newProduct = {
                        category_id: data.categoryId,
                        title: data.title,
                        image_url: imageData.data.url,
                        resale_price: data.resalePrice,
                        original_price: data.originalPrice,
                        condition: data.condition,
                        years_of_use: data.used,
                        description: data.description,
                        author: user?.displayName
                    }
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.title} is added successfully.`)
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:w-[700px] md:w-[500px]'>
            <h2 className="text-3xl mb-6">Add A Product</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div>
                    <label className="label"><span className="label-text font-bold">Category Id</span></label>
                    <select {...register("categoryId", { required: 'Category is required' })} className="select select-bordered w-full">
                        {
                            newProducts.map(newProduct => <option
                                key={newProduct._id}
                                value={newProduct.id}
                            >{newProduct.id}</option>)
                        }

                    </select>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-bold mt-2">Title</span></label>
                        <input type="text" {...register("title", { required: 'Name is required' })} placeholder="Title" className="input input-bordered w-full " />
                        {errors.title && <p className='text-error'>{errors.title?.message}</p>}
                    </div>
                    <div className='my-4'>
                        <label className="label"><span className="label-text font-bold">Photo</span></label>
                        <input type="file" {...register("image", { required: 'Image is required' })} className="file-input file-input-bordered w-full " />
                        {errors.image && <p className='text-error'>{errors.image?.message}</p>}
                    </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-bold">Resale Price</span></label>
                        <input type="text" {...register("resalePrice", {
                            required: "Resale Price is required"
                        })} placeholder="Resale Price on USD" className="input input-bordered w-full " />
                        {errors.resalePrice && <p className='text-error'>{errors.resalePrice?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-bold">Original Price</span></label>
                        <input type="text" {...register("originalPrice", {
                            required: "Original Price is required"
                        })} placeholder="Original Price on USD" className="input input-bordered w-full " />
                        {errors.originalPrice && <p className='text-error'>{errors.originalPrice?.message}</p>}
                    </div>
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text font-bold">Used</span></label>
                        <input type="number" {...register("used")} placeholder="Years of Use" className="input input-bordered w-full " />
                        {errors.used && <p className='text-error'>{errors.used?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-bold">Condition</span></label>
                        <select {...register("condition", { required: 'Condition is required' })} className="select select-bordered w-full max-w-xs">
                            <option selected>Select Condition</option>
                            <option>Excellent</option>
                            <option>Very Good</option>
                            <option>Good</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="label"><span className="label-text font-bold">Description</span></label>
                    <textarea {...register("description", { required: "Description is required" })} className="textarea textarea-bordered w-full" placeholder="Please Describe Your Products"></textarea>
                    {errors.description && <p className='text-error'>{errors.description?.message}</p>}
                </div>

                <input className='btn btn-primary w-full my-6' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;