import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { VscTrash } from "react-icons/vsc";
import toast from 'react-hot-toast';
import ActionModal from '../../Shared/ActionModal/ActionModal';


const Buyer = () => {
    const [deleteBuyer, setDeleteBuyer] = useState(null)

    const cancelModal = () => {
        setDeleteBuyer(null);
    }

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBuyer = buyer => {
        fetch(`http://localhost:5000/buyers/${buyer._id}`, {
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


    return (
        <div>
            <h1 className='text-3xl text-center mt-5 font-bold text-green-500'>All Buyers</h1>
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
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td> < label onClick={() => setDeleteBuyer(buyer)} htmlFor="action-modal" ><VscTrash className='text-3xl hover:cursor-pointer'></VscTrash></label >
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
            {
            deleteBuyer && <ActionModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deleteBuyer.name}. It cannot be undone.`}
                successDelete={handleDeleteBuyer}
                modalData={deleteBuyer}
                cancelModal={cancelModal}
            ></ActionModal>
        }
        </div>
    );
};

export default Buyer;