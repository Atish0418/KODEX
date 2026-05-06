import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MainLayOut from '../layOuts/MainLayOut'
import AuthLayOut from '../layOuts/AuthLayOut'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: "/dashboard",
            element: <MainLayOut />,

            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "about/:id",
                    element: <About />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
            ]

        },

        {
            path:"/",
            element:<AuthLayOut/>,
            children:[
                {
                    path:"",
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                }
            ]
        }
    ])
    return <RouterProvider router={router} />

}

export default AppRoutes