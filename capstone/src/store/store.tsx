import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth.Slice";
import userSlice from "./features/user.Slice";
import messageSlice from "./features/message.Slice";
import coursesSlice from "./features/courses.Slice";
import accountSlice from "./features/account.Slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    account: accountSlice.reducer,
    message: messageSlice.reducer,
    courses: coursesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
