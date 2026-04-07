import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { Auth } from '../../context/AuthContext'

const Navbar = () => {

    let  {setLoggedInUsers} =  useContext(Auth)

    return (
        <div className='h-[10%] px-35 pt-3 pb-3 flex justify-between items-center font-body sticky top-0 z-50 bg-[#0D0D0D]/70 backdrop-blur-md border-b border-white/50'>
            <NavLink>
                <div className='flex items-center gap-2'>
                    <i className="ri-flashlight-fill px-2  py-1 border rounded-xl bg-[#C8F400] text-black"></i>
                    <h1 className=' font-heading text-[17px] font-bold'>Sky<span className='text-[#C8F400]'>Mart</span></h1>
                </div>
            </NavLink>

            <div className='flex gap-5 text-[13px] font-semibold'>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-[#C8F400]" : "text-gray-400"}  >Home</NavLink>
                <NavLink to="/dashboard/shop" className={({ isActive }) => isActive ? "text-[#C8F400]" : "text-gray-400"}  >Shop</NavLink>
                <NavLink to="/dashboard/about" className={({ isActive }) => isActive ? "text-[#C8F400]" : "text-gray-400"}  >About</NavLink>
            </div>
            <div className='flex gap-5  text-[12px] font-semibold items-center'>
                <div className='flex items-center gap-3 text-[##BBBBBB] border border-gray-500 rounded-[10px] px-2 py-1 bg-[#191919]' >
                    <p className='px-2.25  py-1 border rounded-xl bg-[#C8F400] text-black'>A</p>
                    <p>Atish Adhav</p>
                </div>
                <div className='flex gap-2 text-[16px] font-light'>
                    <i className="cursor-pointer ri-shopping-cart-2-line border px-2 py-1 rounded-lg border-gray-500" ></i>
                    <i onClick={() => {
                        localStorage.removeItem('log user')
                        setLoggedInUsers(null)
                    }} className="cursor-pointer ri-logout-box-r-line border px-2 py-1 rounded-lg border-gray-500"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar