import { createSlice } from "@reduxjs/toolkit";
import { registerUser, verifyUserEmail } from "../api-thunk/userThunk";
import { toast } from "react-toastify";

const initialState = {};
const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    setMsg: (state: any, action) => {
      state.message = action.payload;
    },
  },
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
        toast.success("Đăng ký thành công!");
        state.loading = "succeeded";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state: any, action: any) => {
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
export const { setMsg } = accountSlice.actions;

export default accountSlice;
