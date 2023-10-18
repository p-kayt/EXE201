import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api-thunk/userThunk";
import jwtDecode from "jwt-decode";
const initialState = {
  role: null,
  permissions: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.role = user.role;
      // state.permissions = user.permissions;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state: any) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state: any, action: any) => {
        state.loading = "succeeded";
        state.error = null;
        if (action.payload.message === "Success") {
          const token: string = action.payload.result;
          const auth: any = jwtDecode(token);
          console.log(auth);
          state.user = auth;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(loginUser.rejected, (state: any, action: any) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },

  //  extraReducers:{
  //   [loginUser.pending]:(state:any, action:any)=>{},
  // }
});
export const { setUser } = authSlice.actions;

// export const selectUser = state => state.auth;

export default authSlice;
