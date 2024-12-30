import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirebseData, removeFirebase } from "../../database/firebaseUtils";
import { CategoryThunk } from "./CategoryThunk";

const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const getcategories = createAsyncThunk(
  "categories/getcategories",
  async () => {
    let data = await getFirebseData("categories");
    // console.log(data);

    return data;
  }
);

export const deleteCategories = createAsyncThunk(
  "categories/deleteCategories",
  async (id) => {
    const conn = await removeFirebase("categories/" + id);
    console.log(conn);
    

    return id;
  }
);

const categorieSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {

    CategoryThunk(builder, getcategories)
    CategoryThunk(builder, deleteCategories)
    // builder
    //   .addCase(getcategories.pending, (state, action) => {
    //     state.isError = false;
    //     state.isLoading = true;
    //   })
    //   .addCase(getcategories.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.categories = action.payload;
    //     // const updatecategories = [];
    //     // action.payload.forEach((item) => console.log(item);
    //     // )
    //   })
    //   .addCase(getcategories.rejected, (state, action) => {
    //     state.isError = true;
    //     state.error = action.payload.error?.message;
    //   });


    // builder
    // .addCase(deleteCategories.fulfilled, (state, action) => {
      // const categoryIndex = state.categories.findIndex(
      //   (item) => item.id == action.payload
      // );
      // state.categories.splice(categoryIndex, 1)
    // })
    // .addCase(deleteCategories.rejected, (state, action) => {
    //   state.isError = true;
    //   state.error = action.payload.error?.message;
    // });
  },
});

export default categorieSlice.reducer;
