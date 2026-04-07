// components/home/CategoryCard.jsx

import React from 'react'

const CategoryCard = ({ name }) => {
  return (
    <div className="bg-white text-black p-6 rounded-xl text-center hover:scale-105 transition">
      <i className="ri-box-3-line text-xl mb-2"></i>
      <h3 className="font-semibold font-body text-[13px]">{name}</h3>
      <p className="text-xs text-gray-500">items</p>
    </div>
  )
}

export default CategoryCard