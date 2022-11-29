import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { VscTrash } from "react-icons/vsc";
import toast from 'react-hot-toast';
import ActionModal from '../../Shared/ActionModal/ActionModal';


const Sellers = () => {
    const [deleteSeller, setDeleteSeller] = useState(null)

    const cancelModal = () => {
        setDeleteSeller(null);
    }

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://dream-furniture-server.vercel.app/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteSeller = seller => {
        fetch(`https://dream-furniture-server.vercel.app/sellers/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                toast.success('Deleted Successfully')
            }
        })
    }

    const handleMakeVerify = id => {
        fetch(`https://dream-furniture-server.vercel.app/users/sellers/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Seller Verified Successfully.')
                    refetch();
                }
            })
    }


    return (
        <div>
            <h1 className='text-3xl text-center mt-5 font-bold text-green-500'>All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    {sellers?.role !== 'admin' && <button onClick={() => handleMakeVerify(seller._id)} className='btn btn-sm btn-success'>Verify</button>}</td>
                                <td> < label onClick={() => setDeleteSeller(seller)} htmlFor="action-modal" ><VscTrash className='text-3xl hover:cursor-pointer'></VscTrash></label >
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
            {
            deleteSeller && <ActionModal
                title={`Are you sure you want to delete this seller?`}
                message={`If you delete ${deleteSeller.name}. It cannot be undone.`}
                successDelete={handleDeleteSeller}
                modalData={deleteSeller}
                cancelModal={cancelModal}
            ></ActionModal>
        }
        </div>
    );
};

export default Sellers;