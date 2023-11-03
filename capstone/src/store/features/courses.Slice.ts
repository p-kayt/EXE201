import { createSlice } from "@reduxjs/toolkit";
import { getCoursesList } from "../api-thunk/coursesThunk";

const initialState = {};
const coursesSlice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {
    setCourseList: (state: any, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoursesList.pending, (state: any) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(getCoursesList.fulfilled, (state: any, action) => {
        state.loading = "succeeded";
        state.message = action.payload.message;
        if (action.payload.result != null) {
          state.data = action.payload.result;
        }
      })
      .addCase(getCoursesList.rejected, (state: any, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const { setCourseList } = coursesSlice.actions;

export default coursesSlice;
