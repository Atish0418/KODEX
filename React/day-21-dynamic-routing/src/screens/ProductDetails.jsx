import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'

const ProductDetails = () => {

    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate()

    let {id} = useParams()

    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    let res = await axios.get(`https://dummyjson.com/carts/${id}`)
                    console.log(res.data.products[0].thumbnail)
                    setSingleProduct(res.data.products[0])
                    setIsLoading(false)
                } catch (error) {
                    console.log("error in api", error)
                }
            })()
        }

         setIsLoading(true)

    }, [id])

    if(isLoading) return <h1 className='flex text-4xl font-600 items-center'>Loding the product...</h1>

    return (
        <div className='flex flex-col gap-10'>
            <h1>Product details</h1>

            <div>
                <img src={singleProduct.thumbnail} alt="" />
                <h1>{singleProduct.title}</h1>
            </div>


            <div>
                <button onClick={() => navigate(`/product/${id}/moreDetails`)} className='cursor-pointer border rounded px-2'>More Details</button>
                <Outlet/>
            </div>
        </div>
        
    )
}

export default ProductDetails