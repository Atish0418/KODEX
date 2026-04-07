import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import MainLayOut from '../layOuts/MainLayOut'
import AuthLayOut from '../layOuts/AuthLayOut'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import ProtectedDashboard from './ProtectedDashboard'
import AuthProtected from './AuthProtected'
import { getAdapter } from 'axios'
import { getAllProducts } from '../api/productApis'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: "/dashboard",
            element: <ProtectedDashboard />,
            children: [
                {
                    path: "",
                    element: <MainLayOut />,
                    children: [
                        {
                            path: "",
                            element: <Home />
                        },
                        {
                            path: "shop",
                            loader: async () => {
                                let data = await getAllProducts();
                                return data
                            },
                            hydrateFallbackElement: <h1>Loading Products...</h1>,
                            element: <Shop />
                        },
                        {
                            path: "about",
                            element: <About />
                        },
                    ]
                }
            ]
        },
        {
            path: '/',
            element: <AuthProtected />,
            children: [
                {
                    path: "",
                    element: <AuthLayOut />,
                    children: [
                        {
                            path: "",
                            element: <Login />
                        },
                        {
                            path: "register",
                            element: <Register />
                        },
                    ]
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes