const CategoryThunk = (builder, asyncThunk, statekey = "posts") => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.type == 
        "categories/getcategories/fulfilled") {
            state.categories = action.payload;
        }

        if(action.type == "categories/deleteCategories/fulfilled") {
            const categoryIndex = state.categories.findIndex(
                (item) => item.id == action.payload
              );
              state.categories.splice(categoryIndex, 1)
        }

      console.log(action);
      
    //   if (statekey === "posts") {
    //     state.posts = Array.isArray(action.payload)
    //       ? action.payload
    //       : [...state.posts, action.payload];
    //   }
    })
    .addCase(asyncThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
};

export { CategoryThunk };
