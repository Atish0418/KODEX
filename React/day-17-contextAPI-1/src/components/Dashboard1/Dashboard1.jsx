import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductList from "./ProductList"

const Dashboard1 = ({setCartItems, setGetClickedProduct}) => {

    const [allProducts, setAllProducts] = useState([])

    let fetchAllProduct = async () => {
        let res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products)
        setAllProducts(res.data.products)
    }

    useEffect(() => {
        fetchAllProduct()
    }, [])

    let handleProductDelete = (product_id) => {
        let filterProduct = allProducts.filter((elem) => elem.id !== product_id)

        console.log(filterProduct)
        setAllProducts(filterProduct) 
    }

    return (
        <div>
            <h1>Product Home</h1>

            <div>
                {
                    allProducts.map((elem) => {
                        return (
                            <
                                ProductList
                                setGetClickedProduct = {setGetClickedProduct}
                                setCartItems = {setCartItems}
                                handleProductDelete={handleProductDelete}
                                product={elem}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard1