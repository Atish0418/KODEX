import React from 'react'

const Hero = () => {
  return (
    <div className="text-center py-16">
      <div className="flex justify-center mb-4">
        <div className="bg-[#C8F400] text-black p-3 rounded-2xl">
          <i className="ri-flashlight-fill text-xl"></i>
        </div>
      </div>

      <h1 className="text-4xl font-heading font-bold">
        About <span className="text-[#C8F400]">SkyMart</span>
      </h1>

      <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm">
        SkyMart is a next-generation e-commerce platform built to make online
        shopping fast, fair, and enjoyable — for everyone.
      </p>
    </div>
  )
}

export default Hero