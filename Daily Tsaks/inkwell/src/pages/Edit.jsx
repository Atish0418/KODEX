import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Blog } from '../context/BlogContext'

const Edit = () => {

  let navigate = useNavigate()

  let { articles, loggedInUser } = useContext(Blog)

  let total = articles.length;
  let published = articles.filter(a => a.status === "published").length
  let drafts = articles.filter(a => a.status === "draft").length

  

  // console.log(articles)

  return (
    <div className='px-65 mt-12 font-heading'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <p className='text-[16px] mt-1 text-black/60'>Manage your articles, {loggedInUser.name}</p>
        </div>

        <button
          onClick={() => navigate("/new")}
          className='cursor-pointer flex gap-4 items-center bg-[#0d5fac] text-white px-3 py-1.5 rounded-lg'>
          <i className="ri-add-line"></i>
          <p className='text-[14px] font-semibold'>New Article</p>
        </button>
      </div>

      <div className='mt-8 grid grid-cols-3 gap-4'>
        <div className='border border-black/20 px-5 pb-8 pt-5 rounded-xl'>
          <p className='text-[14px] text-black/70'>Total Articles</p>
          <h1 className='text-3xl font-semibold mt-2'>{total}</h1>
        </div>

        <div className='border border-black/20 px-5 pb-8 pt-5 rounded-xl'>
          <p className='text-[14px] text-black/70'>Published</p>
          <h1 className='text-3xl font-semibold mt-2 text-[#00A63E]'>{published}</h1>
        </div>

        <div className='border border-black/20 px-5 pb-8 pt-5 rounded-xl'>
          <p className='text-[14px] text-black/70'>Drafts</p>
          <h1 className='text-3xl font-semibold mt-2 text-black/70'>{drafts}</h1>
        </div>
      </div>

      <div className='mt-8'>
        <h1 className='font-semibold text-[20px]'>Your Articles</h1>

        {
          articles.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-17 border mt-4 rounded-xl border-black/20'>
              <i className="ri-file-text-line text-[50px] text-black/65"></i>
              <h1 className='text-[18px] font-medium mb-1'>No articles yet</h1>
              <p className='text-[14px] mb-3'>Start writing your first article</p>
              <button
                onClick={() => navigate("/new")}
                className=' cursor-pointer flex gap-4 items-center bg-[#0d5fac] text-white px-3 py-1.5 rounded-lg'>
                <i className="ri-add-line"></i>
                <p className='text-[14px] font-semibold'>New Article</p>
              </button>
            </div>
          ) : (
            <div className='flex flex-col gap-4'>
              {
                articles.map((elem, id) => (
                  <div key={id}
                    className=' flex flex-col border border-black/20 rounded-xl p-5  justify-between hover:shadow-md transition'>
                    <div >
                      <div className='flex items-center gap-2 font-medium line-clamp-2'>
                        <h3>{elem.title}</h3>
                        
                        <span className={`text-xs px-2 py-1 rounded-full text-white
                        ${elem.status === "published" ? "bg-blue-500" : "bg-gray-400"}
                      `}>
                          {elem.status}
                        </span>
                      </div>
                    </div>

                    <p className='text-sm text-black/70 mt-1'>  
                      {elem.excerpt}
                    </p>

                    <p className='text-xs text-black/70 mt-2'>
                      Last updated: {elem.date}
                    </p>
                  </div>
                ))
              }
            </div>  
          )
        }

      </div>
    </div>
  )
}

export default Edit