import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api-thunk/userThunk";
import jwtDecode from "jwt-decode";
const initialState = {};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthUser: (state: any, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state: any) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state: any, action) => {
        state.loading = "succeeded";
        state.error = null;
        if (action.payload.message === "Success") {
          const accessToken: string = action.payload.result;
          const refreshToken: string = action.payload.refreshToken;
          const auth: any = jwtDecode(accessToken);
          localStorage.setItem(
            "user",
            JSON.stringify({ accessToken, refreshToken })
          );
          console.log(auth);
          state.user = auth;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(loginUser.rejected, (state: any, action) => {
        state.loading = "failed";
        state.error = action.payload ? action.payload : null;
      });
  },

  //  extraReducers:{
  //   [loginUser.pending]:(state:any, action:any)=>{},
  // }
});
export const { setAuthUser } = authSlice.actions;

// export const selectUser = state => state.auth;

export default authSlice;
