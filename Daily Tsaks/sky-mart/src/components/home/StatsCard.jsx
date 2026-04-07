// components/home/StatsCard.jsx

import React from 'react'

const StatsCard = ({ icon, value, label, color }) => {
  return (
    <div className="border border-white rounded-xl p-5 flex gap-4 items-center">
      <div className={`p-3 rounded-lg ${color}`}>
        <i className={icon}></i>
      </div>
      <div>
        <h2 className="font-bold font-heading">{value}</h2>
        <p className="text-white/40 text-[12px] font-body font-semibold">{label}</p>
      </div>
    </div>
  )
}

export default StatsCard