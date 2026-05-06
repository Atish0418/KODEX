import React from 'react'
import {Outlet} from 'react-router' 

const AuthLayOut = () => {
  return (
    <div>
        <h1>Auth</h1>
        <Outlet/>
    </div>
  )
}

export default AuthLayOut