import { createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from "../../api/courses/courses";

export const getCoursesList = createAsyncThunk(
  "learningCourse/courseList",
  async (props: any, thunkAPI) => {
    try {
      const response = await getList(props);
      //   console.log(response);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
