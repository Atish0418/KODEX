import React from 'react'

const Values = () => {

  const values = [
    {
      title: "Trust",
      desc: "Every product is verified for quality and authenticity before listing.",
      icon: "ri-shield-check-line",
    },
    {
      title: "Speed",
      desc: "We obsess over delivery times so your orders arrive when promised.",
      icon: "ri-truck-line",
    },
    {
      title: "Community",
      desc: "Built around real customer feedback, not just business metrics.",
      icon: "ri-group-line",
    },
    {
      title: "Quality",
      desc: "We curate the best — no filler, no junk, just great products.",
      icon: "ri-star-line",
    },
  ]

  return (
    <>
      <h2 className="text-center text-2xl font-heading font-bold mb-4">
        What We Stand For
      </h2>

      <div className="grid grid-cols-2 gap-6 mb-16">
        {values.map((item, i) => (
          <div key={i} className="border border-white/10 rounded-xl p-6 flex gap-4">
            <div className="bg-[#C8F400]/10 p-3 rounded-lg text-[#C8F400]">
              <i className={`${item.icon}`}></i>
            </div>
            <div>
              <h3 className="font-heading font-semibold">{item.title}</h3>
              <p className="text-white/40 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Values