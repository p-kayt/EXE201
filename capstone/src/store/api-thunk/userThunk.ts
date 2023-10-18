import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../api/user/account";

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

export const registerUser = createAsyncThunk(
  "user/register",
  async (props: any, thunkAPI) => {
    const { email, password } = props;
    try {
      const response = await register(JSON.stringify({ email, password }));
      // console.log(response);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const verifyUserEmail = createAsyncThunk(
  "user/register/verify",
  async (props: any, thunkAPI) => {
    const { code } = props;
    try {
      const response = await register(JSON.stringify({ code }));
      // console.log(response);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
