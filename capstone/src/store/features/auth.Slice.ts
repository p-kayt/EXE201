import { createSlice } from "@reduxjs/toolkit";
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
});
export const { setUser } = authSlice.actions;

// export const selectUser = state => state.auth;

export default authSlice.reducer;
