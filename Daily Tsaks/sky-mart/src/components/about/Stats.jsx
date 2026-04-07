import React from 'react'

const Stats = () => {

  const data = [
    { icon: "ri-box-3-line", value: "20K+", label: "Products" },
    { icon: "ri-user-3-line", value: "50K+", label: "Happy Customers" },
    { icon: "ri-star-line", value: "4.9", label: "Avg. Rating" },
    { icon: "ri-truck-line", value: "99%", label: "On-time Delivery" },
  ]

  return (
    <div className="grid grid-cols-4 gap-6 mb-16">
      {data.map((item, i) => (
        <div key={i} className="border border-white rounded-xl p-6 text-center">
          <i className={`${item.icon} text-[#C8F400] text-xl mb-2`}></i>
          <h2 className="text-xl font-heading font-bold">{item.value}</h2>
          <p className="text-white/40 text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats