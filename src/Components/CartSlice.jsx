// first install the toolkit React_Redux by : npm install @reduxjs/toolkit react-redux
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
};
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingOfIt = state.cartItems.find(item => item.id === action.payload.id);
            if (existingOfIt) {
                existingOfIt.quantity += 1;
            }
            else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cartItems = [];
        },
        increaseItemQuantity(state, action) {
            const Increment = state.cartItems.find(item => item.id === action.payload);
            if (Increment) { Increment.quantity += 1; }
        },
        decreaseItemQuantity(state, action) {
            const decrement = state.cartItems.find(item => item.id === action.payload);
            if (decrement && decrement.quantity > 1) {
                decrement.quantity -= 1;
            }
        }
    }
});
export const { addItemToCart, removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } = CartSlice.actions;
export default CartSlice.reducer;

