// components/home/FeatureCard.jsx

import React from 'react'

const FeatureCard = ({ icon, title, desc, color }) => {
  return (
    <div className="border border-white/10 rounded-xl p-5 flex gap-4 items-center">
      <i className={`${icon} text-xl ${color}`}></i>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-white/40 text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default FeatureCard