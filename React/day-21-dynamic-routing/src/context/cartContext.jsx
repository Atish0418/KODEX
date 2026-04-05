import { createContext, useState } from "react";

export let CartStore = createContext()

export let ContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    let cartLength = cartItems.length

    console.log(cartItems)

    return <CartStore.Provider value={{ cartItems, setCartItems, cartLength }}>
        {children}
    </CartStore.Provider>
}