import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayOut = () => {
  return (
    <div className='h-screen px-30'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayOut