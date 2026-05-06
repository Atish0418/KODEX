import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import ProductCard from '../components/ProductCard'

const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let res = await axiosInstance.get('/products')
        console.log(res)
        setProducts(res.data)
      } catch (error) {
        console.log("Error in products api", error)
      }
    })()
  }, [])

  return (
    <div className='grid grid-cols-4 gap-10'>
      {
        products.map((elem) => (
          <ProductCard product={elem} key={elem.id}/>
        ))
      }
    </div>
  )
}

export default Shop