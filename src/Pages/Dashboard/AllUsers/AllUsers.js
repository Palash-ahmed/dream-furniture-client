import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { VscTrash } from "react-icons/vsc";
import ActionModal from '../../Shared/ActionModal/ActionModal';

const AllUsers = () => {

    const [deleteUser, setDeleteUser] = useState(null)

    const cancelModal = () => {
        setDeleteUser(null);
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                toast.success('Admin Created Successfully.')
                refetch();
            }
        })
    }

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
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
            <h2 className="text-3xl mb-6">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={()=> handleMakeAdmin(user._id)} className="btn btn-sm btn-primary bg-gradient-to-r from-primary to-secondary text-white">Make Admin</button>}</td>
                                    <td>< label onClick={() => setDeleteUser(user)} htmlFor="action-modal" ><VscTrash className='text-3xl hover:cursor-pointer'></VscTrash></label ></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
            deleteUser && <ActionModal
                title={`Are you sure you want to delete this seller?`}
                message={`If you delete ${deleteUser.displayName}. It cannot be undone.`}
                successDelete={handleDeleteUser}
                modalData={deleteUser}
                cancelModal={cancelModal}
            ></ActionModal>
        }
        </div>
    );
};

export default AllUsers;