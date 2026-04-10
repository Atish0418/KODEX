import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Blog } from '../context/BlogContext'

const AuthProtected = () => {

    let {loggedInUser} = useContext(Blog)

    if(loggedInUser){
        return <Navigate to="/" />
    }
  return <Outlet/>
}

export default AuthProtected