import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push({
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        }
    }
})
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems)=> {
        return total + cartItems.totalPrice
    }, 0)
}
export const getCartItems = state => state.cart.cartItems
export const { addItemToCart } = cartSlice.actions
export default cartSlice.reducer