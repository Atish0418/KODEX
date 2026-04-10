import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import MainLayOut from '../layOuts/MainLayOut'
import Edit from '../pages/Edit'
import Create from '../pages/Create'
import AuthLayOut from '../layOuts/AuthLayOut'
import ProtectedRoute from './ProtectedRoute'
import AuthProtected from './AuthProtected'
import BlogDetails from '../components/BlogDetails'


const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: "",
            element: <MainLayOut />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path:"blog/:id",
                    element:<BlogDetails/>
                },
                {
                    element: <ProtectedRoute />,
                    children: [
                        {
                            path: "dashboard",
                            element: <Edit />
                        },
                        {
                            path: "new",
                            element: <Create />
                        },
                    ]
                }
            ]
        },
        {
            path: '/auth',
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
                            path: 'register',
                            element: <Register />
                        }
                    ]
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default AppRoutes