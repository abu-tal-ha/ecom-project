import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
  error: null,
};


const categorieSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, action)  => {
      state.categories = action.payload;
    },
  },

});

export default categorieSlice.reducer;

export const {getCategories} = categorieSlice.actions;