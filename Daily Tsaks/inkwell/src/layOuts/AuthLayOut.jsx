import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const AuthLayOut = () => {
  return (
    <div>
      <div className='px-65 border-b border-black/20 sticky top-0 z-50 backdrop-blur-md'>
        <Navbar />
      </div>
      <Outlet />
    </div>

  )
}

export default AuthLayOut