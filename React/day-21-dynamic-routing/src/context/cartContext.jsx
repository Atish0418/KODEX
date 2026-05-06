import { createContext, useState } from "react";

export let CartStore = createContext()

export let ContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    let cartLength = cartItems.length

    let handleAddToCart = (product) => {
        setCartItems(prev => [...prev, { ...product, quantity: 1 }])
    }

    let handleQtyInc = (id) => {
        let product = cartItems.find(elem => elem.id === id)
        product.quantity += 1
        setCartItems([...cartItems])
    }

    let handleQtyDec = (id) => {
        let product = cartItems.find(elem => elem.id === id)

        if (product.quantity > 1) {
            product.quantity -= 1
            setCartItems([...cartItems])
        }
        else {
            let updatedCart = cartItems.filter(elem => elem.id !== id)
            // console.log(updatedCart)
            setCartItems(updatedCart)
        }
    }


    console.log(cartItems)

    return <CartStore.Provider
        value={{
            cartItems,
            setCartItems,
            cartLength,
            handleAddToCart,
            handleQtyInc,
            handleQtyDec
        }}
    >
        {children}
    </CartStore.Provider>
}