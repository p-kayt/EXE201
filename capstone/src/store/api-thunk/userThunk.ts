import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/user/login";

export const loginUser = createAsyncThunk(
  "user/login",
  async (props: any, thunkAPI) => {
    const { email, password } = props;
    try {
      const response = await login(JSON.stringify({ email, password }));
      // console.log(response);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
