import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    (async()=>{
      try{
        let res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data.carts)
        setProducts(res.data.carts)
      }catch(error){
        console.log("error in api", error)
      }
    })()
  }, [])

  return (
    <div className='grid grid-cols-5 gap-4'>
        {
          products.map((elem) => {
            return <ProductCard key={elem.id} product = {elem}/>
          })
        }
    </div>
  )
}

export default Home