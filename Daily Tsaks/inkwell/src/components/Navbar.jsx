import React, { useContext, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Blog } from '../context/BlogContext'



const Navbar = () => {


    let { loggedInUser, setLoggedInUser, dropDown, setDropDown } = useContext(Blog);

    let navigaate = useNavigate()

    let dropDownRef = useRef()

    useEffect(() => {
        let handleClickOutSide = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setDropDown(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutSide)

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [])

    let handleLogOut = () => {
        localStorage.removeItem("log users")
        setLoggedInUser(null)
        setDropDown(false)
    }

    return (
        <div className='h-[10%] py-2 flex justify-between items-center font-heading '>

            <NavLink to="/" >
                <div className='flex gap-1 items-center'>
                    <i className="ri-edit-line text-[30px] text-[#0d5fac]"></i>
                    <h1 className='text-[20px] font-heading font-semibold'>Inkwell</h1>
                </div>
            </NavLink>

            <div className='flex  items-center gap-2'>
                <i className="ri-moon-line cursor-pointer hover:bg-[#008774] hover:text-white px-4 py-1.5 rounded-lg"></i>
                {
                    !loggedInUser ? (
                        <div className='flex gap-4'>
                            <NavLink
                                to="/auth"
                                className={({ isActive }) => `px-4 py-1.5 rounded-lg font-semibold text-[14px] cursor-pointer text-black hover:bg-[#008774] hover:text-white 
                        ${isActive ? "bg-[#008774] text-white" : ""}`}
                            >
                                Login
                            </NavLink>

                            <NavLink
                                to="/auth/register"
                                className={`cursor-pointer bg-[#0d5fac] px-4 py-1.5 rounded-lg text-white font-semibold text-[14px]`}
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    ) : (
                        <div className='relative ' ref={dropDownRef}>
                            <div
                                onClick={() => setDropDown(!dropDown)}
                                className='flex gap-2 items-center cursor-pointer'>
                                <div className='bg-[#0d5fac] text-white font-heading font-medium w-8 h-8 rounded-full flex items-center justify-center'>
                                    {
                                        loggedInUser.name?.charAt(0).toUpperCase()
                                    }
                                </div>

                                <p className='text-[14px] font-medium'>
                                    {
                                        loggedInUser.name
                                    }
                                </p>
                            </div>

                            {
                                dropDown && (
                                    <div className=' flex flex-col gap-3 absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-3 z-50 border border-black/20 '>
                                        <div className='px-3'>
                                            <h3 className='font-medium text-[14px]'>{loggedInUser.name}</h3>
                                            <p className='text-[12px]'>{loggedInUser.email}</p>
                                            <p className='text-[12px]'>{loggedInUser.role}</p>
                                        </div>

                                        {
                                            loggedInUser.role === "Author" && (
                                                <div 
                                                onClick={() => navigaate("/dashboard")}
                                                className='cursor-pointer flex gap-3 items-center border-t border-black/20 px-3 pt-1 -mb-2'>
                                                    <i className="ri-dashboard-line  text-black/60"></i>
                                                    <p className='text-[14px] '>Dashboard</p>
                                                </div>
                                            )
                                        }

                                        <div
                                            onClick={handleLogOut}
                                            className='cursor-pointer flex gap-3 items-center border-t border-black/20 px-3 pt-1 -mb-2'>
                                            <i className="ri-logout-box-r-line text-black/60"></i>
                                            <p className='text-[14px] text-red-500'>Logout</p>
                                        </div>
                                    </div>)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar