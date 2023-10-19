import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth.Slice";
import userSlice from "./features/user.Slice";

export const store = configureStore({
  reducer: { auth: authSlice.reducer, user: userSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
