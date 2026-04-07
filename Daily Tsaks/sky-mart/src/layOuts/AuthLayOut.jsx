import React from 'react'
import { Outlet, useLocation } from 'react-router'

const AuthLayOut = () => {

    const location = useLocation()
    const isRegister = location.pathname === "/register"

    return (
        <div className='h-screen bg-[#0D0D0D] flex'>

            
            {!isRegister && (
                <div className='w-1/2 flex flex-col justify-center px-12 gap-6 border-r border-white'>

                    <div className='absolute top-10 left-12 flex items-center gap-3'>
                        <div className='bg-[#C8F400] text-black px-2 py-1 rounded-2xl'>
                            <i className="ri-flashlight-fill text-xl"></i>
                        </div>

                        <h1 className='font-heading text-[22px] font-bold'>
                            Sky<span className='text-[#C8F400]'>Mart</span>
                        </h1>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='text-[#C8F400] text-sm font-semibold leading-1 mt-10'>
                            WELCOME BACK
                        </p>

                        <h1 className='font-heading text-[45px] font-bold leading-14'>
                            Shop the future.
                            <br />
                            <span className='text-[#C8F400]'>Today.</span>
                        </h1>

                        <p className='text-white/30 text-sm mt-3'>
                            Thousands of products, lightning-fast delivery, and <br />
                            prices that make your wallet happy.
                        </p>
                    </div>

                    <div className='flex gap-5 mt-6'>
                        <div className='border border-white rounded-xl px-18 py-4 text-center'>
                            <h2 className='text-[#C8F400] font-heading font-bold text-lg'>20K+</h2>
                            <p className='text-white/40 text-xs'>Products</p>
                        </div>

                        <div className='border border-white rounded-xl px-18 py-4 text-center'>
                            <h2 className='text-[#C8F400] font-heading font-bold text-lg'>50K+</h2>
                            <p className='text-white/40 text-xs'>Users</p>
                        </div>

                        <div className='border border-white rounded-xl px-18 py-4 text-center'>
                            <h2 className='text-[#C8F400] font-heading font-bold text-lg'>4.9★</h2>
                            <p className='text-white/40 text-xs'>Rating</p>
                        </div>
                    </div>

                </div>
            )}

            <div className={`${isRegister ? "w-full" : "w-1/2"} flex items-center justify-center`}>
                <Outlet />
            </div>

        </div>
    )
}

export default AuthLayOut


