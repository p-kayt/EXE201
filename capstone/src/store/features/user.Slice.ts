import { createSlice } from "@reduxjs/toolkit";
import { getUser, updateUser } from "../api-thunk/userThunk";

const initialState = {};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state: any, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state: any) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state: any, action) => {
        if (action.payload.message === "Success") {
          state.loading = "succeeded";
          state.error = null;
          state.data = action.payload.result;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(getUser.rejected, (state: any, action) => {
        state.loading = "failed";
        state.error = action.payload;
      })
      //
      .addCase(updateUser.pending, (state: any) => {
        state.loading = "loading";
        state.error = null;
      })

      .addCase(updateUser.fulfilled, (state: any, action) => {
        if (action.payload.message === "Success") {
          state.loading = "succeeded";
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(updateUser.rejected, (state: any, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});
export const { setUser } = userSlice.actions;

export default userSlice;
