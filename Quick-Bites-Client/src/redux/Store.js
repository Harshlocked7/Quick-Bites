import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from '@redux-devtools/extension';
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
   
  },
});
export default Store;

//Store
//One
//2
//3
//4
//5