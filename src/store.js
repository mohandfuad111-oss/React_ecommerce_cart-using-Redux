import { configureStore } from "@reduxjs/toolkit";
import cartSlicing from './Components/CartSlice'
const Store = configureStore({
    reducer: {
        cart: cartSlicing,
    },
});
export default Store;