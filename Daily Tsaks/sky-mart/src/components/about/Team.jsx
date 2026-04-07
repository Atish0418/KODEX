import React from 'react'

const Team = () => {

  const members = [
    { name: "Aryan Shah", role: "Founder & CEO", color: "bg-[#C8F400]" },
    { name: "Priya Mehta", role: "Head of Product", color: "bg-blue-500" },
    { name: "Rohan Verma", role: "Lead Engineer", color: "bg-purple-500" },
    { name: "Sneha Kapoor", role: "Design Director", color: "bg-pink-500" },
  ]

  return (
    <>
      <h2 className="text-center text-xl font-heading font-semibold mb-10">
        Meet the Team
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-16">
        {members.map((m, i) => (
          <div key={i} className="border border-white/10 rounded-xl p-6 text-center">
            <div className={`${m.color} w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-black font-bold mb-3`}>
              {m.name[0]}
            </div>
            <h3 className="font-heading font-semibold">{m.name}</h3>
            <p className="text-white/40 text-sm">{m.role}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Team