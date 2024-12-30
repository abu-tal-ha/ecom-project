import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirebseData, setDataFirebase } from "../../database/firebaseUtils";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getproducts",
  async () => {
    let data = await getFirebseData('products');
    // console.log(data);

    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      setDataFirebase("products", action.payload)
    },
    delteProducts: (state, action) => {
      const productIndex = state.products.findIndex((item) => item.id == action.payload);
      state.products.splice(productIndex, 1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      // const updateproducts = [];
      // action.payload.forEach((item) => console.log(item);
      // )
      state.products = action.payload;

    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isError = true;
      state.error = action.payload.error?.message;
    });
  },
});

export default productsSlice.reducer;
export const {setProducts, delteProducts} = productsSlice.actions;
