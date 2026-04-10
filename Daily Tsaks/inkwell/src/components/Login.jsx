import React, { useContext } from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Blog } from '../context/BlogContext'
import { toast } from 'react-toastify'

const Login = () => {

  let navigate = useNavigate()

  let {registeredUser, setLoggedInUser} = useContext(Blog)

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange'
  })

  let handleFormSubmit = (data) => {
    let user = registeredUser.find(
      (elem) => elem.email === data.email && elem.password === data.password
    )

    if(!user){
      toast.error("User not found")
      reset()
      return
    }

    setLoggedInUser(user)
    navigate('/')
    localStorage.setItem("log users", JSON.stringify(user))
    toast.success("user logged in")
    reset()
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center font-heading'>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='border border-black/20 flex flex-col gap-6 w-[30%] p-6 rounded-xl'>

        <div className='text-center gap-2'>
          <i className="ri-edit-line text-[30px]  text-white rounded-full bg-[#0d5fac] p-2.5"></i>
          <h1 className='text-2xl font-semibold mt-6'>Welcome Back</h1>
          <p className='text-[14px] mt-1 text-black/70'>Sign in to your account to continue</p>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-medium text-[14px]' >Email</label>
          <input
            {...register("email", {
              required: "Email is required"
            })}
            className=' text-[14px] border rounded-lg px-2 py-1 border-gray-400' type="email" placeholder='you@example.com'
          />
          {
            errors.email && <p className='text-red-600 text-[14px]'
            >
              {
                errors.email.message
              }
            </p>
          }
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-medium text-[14px]' >Password</label>
          <input {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 charachter is required"
            }
          })}
            className=' text-[14px] border rounded-lg px-2 py-1 border-gray-400' type="password" placeholder='Enter your password' />
          {
            errors.password && <p className='text-red-600 text-[14px]'
            >
              {errors.password.message}
            </p>
          }
        </div>

        <button type='submit' disabled={!isValid} className='w-full bg-[#0d5fac] p-2 text-[14px] text-white font-medium rounded-lg cursor-pointer text-'>Sign In</button>

        <p className='flex justify-center text-[14px] -mt-4 gap-1'
        >
          Don't have an account?
          <span
            onClick={() => navigate('/auth/register')}
            className="text-[#1966AC] cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login