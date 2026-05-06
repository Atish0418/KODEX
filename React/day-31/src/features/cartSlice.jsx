import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems: [],
    },
    reducers:{
        addToCart:(state, action) => {
            state.cartItems.push(action.payload)
        },
        removeFromCart:(state) => {
            state.cartItems = []
        },
    }
})

export let {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer