import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Auth } from '../../context/AuthContext'
import { toast } from 'react-toastify'

const Register = () => {

  let { setRegisteredUsers, registeredUsers } = useContext(Auth)
  let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  })

  const handleFormSubmit = (data) => {
    let newUser = [...registeredUsers, data]
    setRegisteredUsers(newUser)
    localStorage.setItem("reg users", JSON.stringify(newUser))
    toast.success("User registerd successfully!")
    reset()
  }

  return (
    <div className='min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center gap-6'>

      {/* LOGO */}
      <div className='flex items-center gap-3'>
        <div className='bg-[#C8F400] text-black px-2 py-1 rounded-xl'>
          <i className="ri-flashlight-fill text-lg"></i>
        </div>
        <h1 className='font-heading text-lg font-bold'>
          Sky<span className='text-[#C8F400]'>Mart</span>
        </h1>
      </div>

      {/* CARD */}
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='w-[420px] bg-[#111111] border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col gap-4'
      >

        <h1 className='text-2xl font-heading font-semibold -mb-3.5'>
          Create account
        </h1>

        <p className='text-white/40 text-[13px] font-semibold'>
          Join SkyMart and start shopping
        </p>

        {/* NAME */}
        <input
          {...register("name", { required: "Name is required" })}
          placeholder='Full name'
          className='bg-[#1A1A1A]  text-[12px] font-semibold border border-white/10 rounded-xl px-4 py-2 text-white/70 outline-none focus:border-[#C8F400]'
        />
        {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}

        {/* EMAIL */}
        <input
          {...register("email", { required: "Email is required" })}
          placeholder='Email address'
          className='bg-[#1A1A1A]  text-[12px] font-semibold border border-white/10 rounded-xl px-4 py-2 text-white/70 outline-none focus:border-[#C8F400]'
        />
        {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}

        {/* PASSWORD */}
        <input
          {...register("password", { required: "Password is required" })}
          type='password'
          placeholder='Password'
          className='bg-[#1A1A1A]  text-[12px] font-semibold border  font border-white/10 rounded-xl px-4 py-2 text-white/70 outline-none focus:border-[#C8F400]'
        />
        {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}

        {/* CONFIRM */}
        <input
          {...register("confirmPassword", { required: "Confirm password is required" })}
          type='password'
          placeholder='Confirm password'
          className='bg-[#1A1A1A] border text-[12px] font-semibold border-white/10 rounded-xl px-4 py-2 text-white/70 outline-none focus:border-[#C8F400]'
        />

        {/* BUTTON */}
        <button className='font-heading cursor-pointer  bg-[#C8F400] text-black py-3 rounded-xl font-semibold hover:bg-[#E0FF66]'>
          Create Account <i className="ri-arrow-right-line font-light "></i>
        </button>

        <p className='text-white/40 text-xs text-center mt-2 font-body font-semibold'>
          Already have an account ? <span onClick={() => navigate("/")} className=' font-body font-semibold cursor-pointer text-[#C8F400]'>Sign in</span>
        </p>

      </form>
    </div>
  )
}

export default Register