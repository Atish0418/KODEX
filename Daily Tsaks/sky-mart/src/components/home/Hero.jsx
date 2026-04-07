// components/home/Hero.jsx

import React from 'react'

const Hero = () => {
  return (
    <div className="mt-10 border border-white rounded-2xl p-10 flex justify-between items-center mb-10 bg-[radial-gradient(circle,rgba(200,244,0,0.05)_1px,transparent_1px)] [background-size:20px_20px]">

      <div>
        <p className="text-[#C8F400] text-sm mb-2 font-body font-semibold">GOOD EVENING 👋</p>

        <h1 className="text-5xl font-heading font-bold">
          Welcome back, <br />
          <span className="text-[#C8F400]">Atish!</span>
        </h1>

        <p className="text-white/40 mt-4 text-sm font-body font-semibold">
          Discover today's picks — hand-curated products across <br /> electronics, fashion, and more.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-1 bg-[#C8F400] text-black px-5 py-2  text-[13px] rounded-xl font-semibold font-body cursor-pointer hover:bg-[#E0FF66]">
            Shop Now <i className="ri-arrow-right-line text-[16px] font-[300]"></i>
          </button>

          <button className="border border-white/20 px-5 py-2 rounded-xl  text-[13px] font-semibold font-body">
            View All Products
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-[#C8F400]/10 border border-[#C8F400]/30 rounded-xl px-8 py-4 text-center">
          <h2 className="text-[#C8F400] text-4xl font-heading  font-bold">20+</h2>
          <p className="text-white/40 text-[11px] font-body font-semibold">Products Available</p>
        </div>

        <div className="border border-white/20 rounded-xl px-8 py-4 text-center">
          <h2 className="text-[25px] font-heading font-bold">Free</h2>
          <p className="text-white/40 text-[11px] font-body font-semibold "> Delivery on ₹999+</p>
        </div>
      </div>

    </div>
  )
}

export default Hero