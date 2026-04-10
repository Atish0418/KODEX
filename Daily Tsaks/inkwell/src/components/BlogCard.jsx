import React, { useContext } from 'react'
import { useNavigate } from 'react-router'


const BlogCard = ({ elem, id }) => {

  let navigate = useNavigate()

  return (
    <div
    onClick={() => navigate(`/blog/${id}`)}
     className='border border-black/20 bg-white w-[310px] rounded-xl p-6 mt-8 hover:border-[#0d5fac] transition-all duration-500 cursor-pointer'>

      <div className='flex gap-2 flex-wrap mb-3'>
        {elem.tags?.map((tag, id) => (
          <span
            key={id}
            className='bg-[#EEEEEE] px-3 py-1 rounded-xl text-[12px]'
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className='text-[20px] font-semibold leading-tight hover:text-[#0d5fac]'>
        {elem.title}
      </h2>

      <p className='mt-6 text-[16px] text-black/60 leading-5 line-clamp-3'>
        {elem.content}
      </p>

      <div className='flex justify-between items-center mt-6 text-[13px] text-black/60'>
        <div className='flex gap-2 items-center'>
          <i className="ri-user-3-line"></i>
          <p>{elem.author}</p>
        </div>

        <div className='flex gap-2 items-center'>
          <i className="ri-calendar-2-line"></i>
          <p>{elem.date}</p>
        </div>
      </div>

    </div>
  )
}

export default BlogCard