import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Blog } from '../context/BlogContext'
import { toast } from 'react-toastify'

const Register = () => {

  let navigate = useNavigate()

  const [role, setRole] = useState("Reader")

  let { setRegisteredUser, registeredUser } = useContext(Blog)

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange'
  })

  let handleFormSubmit = (data) => {

    let userRole = {
      ...data, role
    }

    let newUser = [...registeredUser, userRole]
    localStorage.setItem('reg users', JSON.stringify(newUser))
    toast.success("User registered succefully!")
    reset()
  }

  return (
    <div className='min-h-screen flex items-center justify-center py-10 font-heading'>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='border border-black/20 flex flex-col gap-6 w-[30%] p-6 rounded-xl '>

        <div className='text-center gap-2'>
          <i className="ri-edit-line text-[30px]  text-white rounded-full bg-[#0d5fac] p-2.5"></i>
          <h1 className='text-2xl font-semibold mt-6'>Welcome Back</h1>
          <p className='text-[14px] mt-1 text-black/70'>Sign in to your account to continue</p>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-medium text-[14px]' >Name</label>
          <input
            {...register("name", {
              required: "Name is required"
            })}
            className=' text-[14px] border rounded-lg px-2 py-1 border-gray-400' type="text" placeholder='John Doe' />
          {
            errors.name && <p className='text-red-600 text-[14px]'
            >
              {
                errors.name.message
              }
            </p>
          }
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
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 charachter is required"
              }
            })} className=' text-[14px] border rounded-lg px-2 py-1 border-gray-400' type="password" placeholder='Enter your password' />
          {
            errors.password && <p className='text-red-600 text-[14px]'
            >
              {
                errors.password.message
              }
            </p>
          }
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-medium text-[14px]' >Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm password is required"
            })}
            className=' text-[14px] border rounded-lg px-2 py-1 border-gray-400' type="password" placeholder='Confirm your password' />
          {
            errors.passsword && <p className='text-red-600 text-[14px]'
            >
              {
                errors.password.message
              }
            </p>
          }
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-medium text-[14px]'>Account Type</p>
          <div className='flex justify-between text-center'>
            <div
             onClick={() => setRole("Reader")}
             className={`border px-15 py-4 rounded-xl cursor-pointer
              ${role === "Reader" ? "border-blue-500 bg-blue-50" : ""}`}
             >
              <h1 className='font-medium'>Reader</h1>
              <p className='text-[12px] text-black/70'>Read articles</p>
            </div  >
            <div
            onClick={() => setRole("Author")}
             className={`border px-15 py-4 rounded-xl cursor-pointer
              ${role === "Author" ? "border-blue-500 bg-blue-50" : ""}`}
             >
              <h1 className='font-medium'>Author</h1>
              <p className='text-[12px] text-black/70 '>Write & publish</p>
            </div>
          </div>
        </div>

        <button type='submit' disabled={!isValid} className='w-full bg-[#0d5fac] p-2 text-[14px] text-white font-medium rounded-lg cursor-pointer text-'>Create Account</button>

        <p className='flex justify-center text-[14px] -mt-4 gap-1'
        >
          Don't have an account?
          <span onClick={() => navigate('/auth')}
            className="text-[#1966AC] cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  )
}

export default Register