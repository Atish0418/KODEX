// components/home/ProductList.jsx

import React from 'react'

const ProductList = ({ title }) => {
  return (
    <div className="bg-white rounded-2xl p-6 text-black">
      
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-[#C8F400] text-sm cursor-pointer">See all →</p>
      </div>

      {[1,2,3,4].map((item)=>(
        <div key={item} className="flex justify-between items-center border rounded-xl p-3 mb-3">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-gray-300 rounded"></div>
            <p>$199.99</p>
          </div>
          <button className="bg-[#C8F400] px-3 py-1 rounded">+</button>
        </div>
      ))}

    </div>
  )
}

export default ProductList