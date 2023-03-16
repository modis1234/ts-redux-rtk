import { createSlice } from "@reduxjs/toolkit";
import { MyKnownError } from "lib/createAsyncThunk";
import {
  GET_SITES_FULFILLED,
  GET_SITES_PENDING,
  GET_SITES_REJECTED,
  POST_SITES_FULFILLED,
  POST_SITES_PENDING,
  POST_SITES_REJECTED,
} from "./actions";
import { SiteType } from "./types";

const initialState: {
  loading: boolean;
  error: MyKnownError | null;
  data: SiteType[];
} = {
  loading: false,
  data: [],
  error: null,
};

export const siteSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [GET_SITES_PENDING]: (state, action) => {
      // HANDLE MY UPLOAD_START ACTION
      console.log("pending->", action.payload);
      state.loading = true;
    },
    [GET_SITES_FULFILLED]: (state, action) => {
      // HANDLE MY UPLOAD_SUCCESS ACTION
      // initialState에 있는 error를 사용한다
      //   state.list = action.payload;
      console.log(action.payload);
      // console.log("state--->", state.);
      state.loading = false;
      state.data = action.payload;
      console.log("fulfilled");
    },
    [GET_SITES_REJECTED]: (state, action) => {
      // HANDLE MY UPLOAD_FAILURE ACTION
      console.log("rejected");
      //       state.loading = false;
    },
    [POST_SITES_PENDING]: (state, action) => {
      // HANDLE MY UPLOAD_START ACTION
      console.log("pending->", action.payload);
      state.loading = true;
    },
    [POST_SITES_FULFILLED]: (state, action) => ({
      ...state,
      loading: false,
      data: state.data.concat(action.payload),
    }),
    // [POST_SITES_FULFILLED]: (state, action) => {
    //   // HANDLE MY UPLOAD_SUCCESS ACTION
    //   // initialState에 있는 error를 사용한다
    //   //   state.list = action.payload;
    //   console.log(action.payload);
    //   console.log("state--->", state.data);
    //   state.loading = false;
    //   state.data = action.payload;
    //   console.log("fulfilled");
    // },
    [POST_SITES_REJECTED]: (state, action) => {
      // HANDLE MY UPLOAD_FAILURE ACTION
      console.log("rejected");
      //       state.loading = false;
    },
  },
});

export default siteSlice.reducer;
