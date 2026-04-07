import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'

const MainLayOut = () => {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <div className='flex-1 px-30'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayOut