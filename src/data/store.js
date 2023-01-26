import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSLice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSLice.reducer,
  },
});

export default store;
