import { createSlice } from "@reduxjs/toolkit";
import { MyKnownError } from "lib/createAsyncThunk";
import {
  GET_POSTS_FULFILLED,
  GET_POSTS_PENDING,
  GET_POSTS_REJECTED,
} from "./actions";
import { PostType } from "./types";

const initialState: {
  loading: boolean;
  error: MyKnownError | null;
  data: PostType[];
} = {
  loading: false,
  data: [],
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [GET_POSTS_PENDING]: (state, action) => {
      // HANDLE MY UPLOAD_START ACTION
      console.log("pending->", action.payload);
      state.loading = true;
    },
    [GET_POSTS_FULFILLED]: (state, action) => {
      // HANDLE MY UPLOAD_SUCCESS ACTION
      // initialState에 있는 error를 사용한다
      //   state.list = action.payload;
      console.log("--->", action.payload);
      state.loading = false;
      state.data = action.payload;
      console.log("fulfilled");
    },
    [GET_POSTS_REJECTED]: (state, action) => {
      // HANDLE MY UPLOAD_FAILURE ACTION
      console.log("rejected");
      //       state.loading = false;
    },
  },
});

export default postSlice.reducer;
