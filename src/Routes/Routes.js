import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main"
import Category from "../Pages/Category/Category";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import BuyProduct from "../Pages/Dashboard/BuyProduct/BuyProduct";
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <BuyProduct></BuyProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
            },
        ]
    }
])

export default router;