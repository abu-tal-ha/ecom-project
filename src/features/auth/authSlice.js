import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isLogin: false,
    user: null,
};

// export const setLoginUser = createAsyncThunk("auth/loginUser", async (data) => {
//     return data;
// })

const authSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: {
        setLoginUser: (state, action) => {
            state.isLogin = true;
            state.user = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(setLoginUser.fulfilled, (state, action) => {
    //         state.isLogin = true;
    //         state.user = action.payload;
    //     });
    // },
});


export default authSlice.reducer;
export const {setLoginUser} = authSlice.actions;