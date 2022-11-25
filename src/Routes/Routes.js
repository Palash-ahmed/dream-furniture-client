import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";

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
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/products/:id',
                element: <Products></Products>
            },
        ]
    }
])

export default router;