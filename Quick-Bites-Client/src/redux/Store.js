import { configureStore } from "@reduxjs/toolkit"

const Store =  configureStore({
    reducer: {
        cart: CartSlice,
    },
});
export default Store;
