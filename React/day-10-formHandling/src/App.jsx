import React from 'react'

const App = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <h1>Create Account</h1>

      <form className='border flex flex-col gap-3 w-[30%] p-5 rounded-2xl' action="">
        <div className='flex flex-col gap-1'>
          <label className='font-semibold' >Name</label>
          <input className='border rounded-lg px-2 py-1 border-gray-400' type="text" placeholder='John Doe' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold' >Email</label>
          <input className='border rounded-lg px-2 py-1 border-gray-400' type="text" placeholder='john@gmail.com' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold' >Password</label>
          <input className='border rounded-lg px-2 py-1 border-gray-400' type="text" placeholder='12345678' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold' >Mobile</label>
          <input className='border rounded-lg px-2 py-1 border-gray-400' type="number" placeholder='8938312370' />
        </div>

        <button className='w-full bg-blue-400 p-2 text-white font-medium rounded-lg cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default App