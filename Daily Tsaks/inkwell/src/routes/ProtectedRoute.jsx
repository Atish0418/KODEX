import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Blog } from '../context/BlogContext'
import { toast } from 'react-toastify'

const ProtectedRoute = () => {

    let { loggedInUser } = useContext(Blog)

    if (!loggedInUser) {
        toast.error("Unauthorized user")
        return <Navigate to="/auth" />
    }

    if(loggedInUser.role === "Reader"){
        return <Navigate to="/" />
    }
 

    return <Outlet />
}

export default ProtectedRoute