import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import MainLayOut from '../layOuts/MainLayOut'
import AuthLayOut from '../layOuts/AuthLayOut'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/dashboard",
            element:<MainLayOut/>,
            children: [
                {
                    path:"",
                    element:<Home/>
                },
                {
                    path:"shop",
                    element:<Shop/>
                },
                {
                    path:"about",
                    element:<About/>
                },
            ]
        },
        {
            path:'/',
            element:<AuthLayOut/>,
            children:[
                {
                    path:"",
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                },
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes