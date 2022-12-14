import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../components/Hooks/useAdmin/useAdmin';
import useBuyer from '../components/Hooks/UseBuyer/useBuyer';
import useSeller from '../components/Hooks/useSeller/useSeller';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-pocket" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-pocket" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-80 font-bold sm:text-black bg-light w-48">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/sellers'>Sellers</Link></li>
                            </>
                        }
                        {
                            isSeller &&

                            <>
                                <li><Link to='/dashboard/addproduct'>Add A Products</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>

                            </>
                        }
                        {
                            isBuyer &&
                            <>
                                
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;