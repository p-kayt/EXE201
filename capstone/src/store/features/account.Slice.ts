import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  verifyUserEmail,
} from "../api-thunk/userThunk";
import jwtDecode from "jwt-decode";
const initialState = {};
const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // register request
      .addCase(registerUser.pending, (state: any) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state: any, action: any) => {
        state.loading = "succeeded";
        state.error = null;
        if (action.payload.message === "Create success") {
          state.message = action.payload.message;
        } else {
          state.error = action.payload.message;
        }
        state.loading = "succeeded";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state: any, action: any) => {
        console.log("failed");

        state.loading = "failed";
        state.error = action.payload;
      })
      // verify
      .addCase(verifyUserEmail.pending, (state: any) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(verifyUserEmail.fulfilled, (state: any, action: any) => {
        state.loading = "succeeded";
        state.error = null;
      })
      .addCase(verifyUserEmail.rejected, (state: any, action: any) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});
export const {} = accountSlice.actions;

export default accountSlice;
