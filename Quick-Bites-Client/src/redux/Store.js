import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import CartSlice from "./slices/CartSlice";


const Store = configureStore({
  reducer: {
    cart: CartSlice,
   
  },
});
export default Store;