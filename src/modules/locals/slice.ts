import { createSlice } from "@reduxjs/toolkit";
import { MyKnownError } from "lib/createAsyncThunk";
import {
  GET_LOCALS_FULFILLED,
  GET_LOCALS_PENDING,
  GET_LOCALS_REJECTED,
  POST_LOCALS_FULFILLED,
  POST_LOCALS_PENDING,
  POST_LOCALS_REJECTED,
} from "./actions";
import { LocalType } from "./types";

const initialState: {
  loading: boolean;
  error: MyKnownError | null;
  data: LocalType[];
} = {
  loading: false,
  data: [],
  error: null,
};

export const localSlice = createSlice({
  name: "locals",
  initialState,
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [GET_LOCALS_PENDING]: (state, action) => {
      // HANDLE MY UPLOAD_START ACTION
      console.log("pending->", action.payload);
      state.loading = true;
    },
    [GET_LOCALS_FULFILLED]: (state, action) => {
      // HANDLE MY UPLOAD_SUCCESS ACTION
      // initialState에 있는 error를 사용한다
      //   state.list = action.payload;
      console.log(action.payload);
      state.loading = false;
      state.data = action.payload;
      console.log("fulfilled");
    },
    [GET_LOCALS_REJECTED]: (state, action) => {
      // HANDLE MY UPLOAD_FAILURE ACTION
      console.log("rejected");
      //       state.loading = false;
    },
    [POST_LOCALS_PENDING]: (state, action) => {
      // HANDLE MY UPLOAD_START ACTION
      console.log("pending->", action.payload);
      state.loading = true;
    },
    [POST_LOCALS_FULFILLED]: (state, action) => {
      // HANDLE MY UPLOAD_SUCCESS ACTION
      // initialState에 있는 error를 사용한다
      //   state.list = action.payload;
      console.log(action.payload);
      state.loading = false;
      state.data = action.payload;
      console.log("fulfilled");
    },
    [POST_LOCALS_REJECTED]: (state, action) => {
      // HANDLE MY UPLOAD_FAILURE ACTION
      console.log("rejected");
      //       state.loading = false;
    },
  },
});

export default localSlice.reducer;
