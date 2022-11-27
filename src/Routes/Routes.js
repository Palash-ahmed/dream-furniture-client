import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main"
import Category from "../Pages/Category/Category";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import BuyProduct from "../Pages/Dashboard/BuyProduct/BuyProduct";
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import SignUp from "../Pages/SignUp/SignUp";
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
            {
                path: '/productsdetails/:id',
                element: <ProductsDetails></ProductsDetails>
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
                element: <AllUsers></AllUsers>
            },
        ]
    }
])

export default router;