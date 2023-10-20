import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const userSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    setMessage: (state: any, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setMessage } = userSlice.actions;

export default userSlice;