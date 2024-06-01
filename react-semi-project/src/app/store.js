import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/products/productslice';
import cartslice from "../features/cart/cartslice";



export const store = configureStore({
    reducer: {
      products: productReducer,
      cart : cartslice
    },
  });

  export default store;