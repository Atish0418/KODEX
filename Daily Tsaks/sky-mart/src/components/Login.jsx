import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'



const Login = () => {

    let navigate = useNavigate() 

    let {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm()

    const handleFormSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className='w-[430px] bg-[#111111] border border-white/10 rounded-2xl p-8 shadow-2xl'
        >

            <h1 className='text-2xl font-heading font-semibold '>Sign in</h1>
            <p className='text-white/40 text-[12px] font-semibold mb-6'>
                Enter your credentials to continue
            </p>

            {/* EMAIL */}
            <div className='relative mb-3'>
                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-white/30"></i>
                <input
                    {...register("email", {
                        required: "Email is required",
                    })}
                    type='email'
                    placeholder='Email address'
                    className='w-full text-[14px] font-semibold bg-[#1A1A1A] border border-white/10 text-white/50 rounded-xl pl-10 py-2 outline-none focus:border-[#C8F400]'
                />
                {
                    errors.email && <p className='font-heading font-semibold text-[14px] mt-2 text-red-600'>{errors.email.message}</p>
                }
            </div>

            {/* PASSWORD */}
            <div className='relative mb-6'>
                <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                <input
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Minimum 6 characters required"
                        }
                    })}
                    type='password'
                    placeholder='Password'
                    className='w-full text-[14px] font-semibold bg-[#1A1A1A] border border-white/10 text-white/50 rounded-xl pl-10 py-2 outline-none focus:border-[#C8F400]'
                />
                {
                    errors.password && <p className='font-heading font-semibold text-[14px] mt-2 text-red-600'>{errors.password.message}</p>
                }
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                className='w-full font-heading cursor-pointer bg-[#C8F400] text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#E0FF66]'
            >
                Sign in <i className="ri-arrow-right-line"></i>
            </button>

            <p className='text-white/40 text-[12px] font-body font-semibold mt-6 text-center'>
                Don’t have an account ?{' '}
                <span onClick={() => navigate("/register")} className='text-[#C8F400] cursor-pointer text-[12px] font-semibold'>Create one</span>
            </p>

        </form>
    )
}

export default Login

