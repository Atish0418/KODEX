import React from 'react'

const CTA = () => {
  return (
    <div className="border border-[#C8F400]/30 rounded-2xl p-10 text-center mb-20">
      <h2 className="text-xl font-heading font-semibold mb-2">
        Ready to shop?
      </h2>

      <p className="text-white/40 text-sm mb-6">
        Explore thousands of products at unbeatable prices.
      </p>

      <button className="bg-[#C8F400] text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto hover:bg-[#E0FF66] transition">
        Browse Products <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  )
}

export default CTA