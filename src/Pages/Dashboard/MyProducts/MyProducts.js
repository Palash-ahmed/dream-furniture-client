import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { VscTrash } from "react-icons/vsc";
import Loading from '../../Shared/Loading/Loading';
import ActionModal from '../../Shared/ActionModal/ActionModal';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);

    const cancelModal = () => {
        setDeleteProduct(null);
    }


    const { user } = useContext(AuthContext);
    const url = `https://dream-furniture-server.vercel.app/products?email=${user?.email}`;
    const { data: newProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['newProducts', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });


    const handleDeleteProduct = product => {
        fetch(`https://dream-furniture-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                toast.success('Your Product Deleted')
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl mb-6">My Products</h3>
            <div className=" w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>User Info</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newProducts?.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <p className='font-bold uppercase'>{product.displayName}</p>
                                        <br />
                                        <span className="font-bold">{product.email}</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-32 rounded">
                                                    <img src={product.image_url} alt='' />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-bold'>{product.title}</td>
                                    <td className='font-bold'>${product.resale_price}</td>
                                    <td>
                                        < label onClick={() => setDeleteProduct(product)} htmlFor="action-modal" ><VscTrash className='text-3xl hover:cursor-pointer'></VscTrash></label >
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ActionModal
                    title={`Are you sure you want to delete your product?`}
                    message={`If you delete ${deleteProduct.title}. It cannot be undone.`}
                    successDelete={handleDeleteProduct}
                    modalData={deleteProduct}
                    cancelModal={cancelModal}
                ></ActionModal>
            }
        </div>
    );
};

export default MyProducts;