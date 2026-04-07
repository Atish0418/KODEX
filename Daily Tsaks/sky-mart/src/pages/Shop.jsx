import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import ProductCard from '../components/cards/ProductCard'

const Shop = () => {

  const [search, setSearch] = useState("")

  let products = useLoaderData()

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='p-6'>

      {/* TITLE */}
      <h1 className='text-2xl font-heading mb-6'>
        All Products
      </h1>

      <div className='border border-white/10 rounded-2xl p-3 flex items-center gap-3 mb-6'>

        {/* SEARCH INPUT */}
        <div className='flex items-center bg-[#1A1A1A] rounded-xl px-4 py-2 flex-1'>
          <i className="ri-search-line text-white/40 mr-2"></i>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-transparent outline-none text-sm text-white w-full'
          />
        </div>

        {/* CATEGORY (UI only for now) */}
        <select className='bg-[#1A1A1A] text-white/70 px-4 py-2 rounded-xl outline-none'>
          <option>All Categories</option>
        </select>

        {/* SORT (UI only) */}
        <select className='bg-[#1A1A1A] text-white/70 px-4 py-2 rounded-xl outline-none'>
          <option>Featured</option>
        </select>

      </div>

      

      {/* GRID */}
      <div className='grid grid-cols-5 gap-6'>
        {
          products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        }
      </div>

    </div>
  )
}

export default Shop