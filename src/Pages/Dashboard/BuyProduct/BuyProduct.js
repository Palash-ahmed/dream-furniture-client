import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const BuyProduct = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`;
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl mb-6">My Orders</h3>
            <div className=" w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>User Info</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders?.map((order, i) =>
                                <tr key={order._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <p className='font-bold uppercase'>{order?.buyerName}</p>
                                        <br />
                                        <span className="font-bold">{order?.phone}</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-32 rounded">
                                                    <img src={order?.image_url} alt='' />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-bold'>{order?.productName}</td>
                                    <td className='font-bold'>{order?.price}</td>
                                    <td>
                                        {
                                            order?.price && !order?.paid && <Link to={`/dashboard/payment/${order?._id}`}>
                                                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Pay</button>
                                            </Link>
                                        }
                                        {
                                            order?.price && order?.paid && <p className='text-success font-bold'>Paid</p>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BuyProduct;