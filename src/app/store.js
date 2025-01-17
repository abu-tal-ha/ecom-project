import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/ProductsSlice";
import categoriSlice from "../features/categories/categorySlice";
import authSlice from "../features/auth/authSlice"
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categoriSlice,
        auth: authSlice,
        carts: cartSlice,
    },
});

export default store;