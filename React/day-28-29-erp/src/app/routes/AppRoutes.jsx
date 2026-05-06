import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayOut'
import LoginPage from '../../features/auth/pages/LoginPage'
import RegisterPage from '../../features/auth/pages/RegisterPage'
import DashboardLayout from '../layouts/DashboardLayOut'
import HomePage from '../../features/dashboard/pages/Homepage'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout />,
            children: [
                {
                    path:"",
                    element:<LoginPage/>
                },
                {
                    path:"register",
                    element:<RegisterPage/>
                }
            ]
        },
        {
            path:"/dashboard",
            element:<DashboardLayout/>,
            children: [
                {
                    path:"",
                    element:<HomePage/>
                }
            ]
        }
    ])
  return  <RouterProvider router={router} />
}

export default AppRoutes