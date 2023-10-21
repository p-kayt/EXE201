import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserById,
  login,
  register,
  updateUserById,
} from "../../api/user/account";
import { toast } from "react-toastify";

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
      const response = await register(JSON.stringify(props));

      return response;
    } catch (error: any) {
      // temp
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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

export const getUser = createAsyncThunk(
  "user/getUser",
  async (props: any, thunkAPI) => {
    const { ID } = props;
    try {
      const response = await getUserById(ID);
      // console.log(response);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (props: any, thunkAPI) => {
    const { ID, data } = props;
    console.log({ ID, data });

    try {
      const response = await updateUserById(props);
      // console.log(response);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
