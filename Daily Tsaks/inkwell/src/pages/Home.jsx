import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import { Blog } from '../context/BlogContext'

const Home = () => {

  let { articles } = useContext(Blog)

  let published = articles.filter(a => a.status === "published")

  return (
    <div className='px-65 font-heading'>
      <div>
        <div className=' flex flex-col justify-center text-center mt-12 '>
          <h1 className=' font-bold text-5xl tracking-tighter'>Welcome to <span className='text-[#0d5fac]'>Inkwell</span></h1>
          <p className='mt-4 text-[18px] text-black/60 '>Discover thoughtful articles on technology, programming, and software <br /> engineering from passionate writers.</p>
        </div>

        <div className='mt-10  flex justify-between  items-center '>
          <h1 className='text-[23px] font-semibold'>Latest Articles</h1>
          <p className='text-[14px] text-black/70 text-center'>4 articles</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {published.map((elem, id) => (
            <BlogCard key={id} elem={elem} id={id} />
          ))}
        </div>

      </div>
    </div >
  )
}

export default Home