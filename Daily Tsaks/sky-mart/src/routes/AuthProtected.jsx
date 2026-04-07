import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'

const AuthProtected = () => {

    let { loggedInUsers } = useContext(Auth);

    if (loggedInUsers) {
        return <Navigate to="/dashboard" />
    }
    return <Outlet />
}

export default AuthProtected