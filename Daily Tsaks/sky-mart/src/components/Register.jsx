import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const Register = () => {


    let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
        onSubmit={handleSubmit(onSubmit)}
        className='w-[420px] bg-[#111111] border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col gap-4'
      >

        <h1 className='text-2xl font-heading font-semibold'>
          Create account
        </h1>

        <p className='text-white/40 text-[13px]'>
          Join SkyMart and start shopping
        </p>

        {/* NAME */}
        <input
          {...register("name", { required: "Name is required" })}
          placeholder='Full name'
          className='bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white/70'
        />
        {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}

        {/* EMAIL */}
        <input
          {...register("email", { required: "Email is required" })}
          placeholder='Email address'
          className='bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white/70'
        />
        {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}

        {/* PASSWORD */}
        <input
          {...register("password", { required: "Password is required" })}
          type='password'
          placeholder='Password'
          className='bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white/70'
        />
        {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}

        {/* CONFIRM */}
        <input
          {...register("confirmPassword", { required: "Confirm password is required" })}
          type='password'
          placeholder='Confirm password'
          className='bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white/70'
        />

        {/* BUTTON */}
        <button className='mt-2 bg-[#C8F400] text-black py-3 rounded-xl font-semibold hover:bg-[#E0FF66]'>
          Create Account →
        </button>

        <p className='text-white/40 text-xs text-center mt-2'>
          Already have an account? <span onClick={() => navigate("/")} className=' cursor-pointer text-[#C8F400]'>Sign in</span>
        </p>

      </form>
    </div>
  )
}

export default Register