import { createAsyncThunk } from "@reduxjs/toolkit";
import { COMM_ACTION } from "./actions";
import * as postsAPI from "../../api/posts";
import createThunk, { MyKnownError } from "lib/createAsyncThunk";
import { PostType } from "./types";

// export const getPosts = createAsyncThunk<
//   // 성공 시 리턴 타입
//   PostType,
//   // input type. 아래 콜백함수에서 userId 인자가 input에 해당
//   undefined,
//   // ThunkApi 정의({dispatch?, state?, extra?, rejectValue?})
//   { rejectValue: MyKnownError }
// >(COMM_ACTION, async (userId, thunkAPI) => {
//   try {
//     const payload = await postsAPI.getPosts();
//     return payload;
//   } catch (e) {
//     // rejectWithValue를 사용하여 에러 핸들링이 가능하다

//     return thunkAPI.rejectWithValue({
//       errorMessage: "알 수 없는 에러가 발생했습니다.",
//     });
//   }
// });

export const getPosts = createThunk<PostType[]>(COMM_ACTION, postsAPI.getPosts);

export const getPost = createThunk<PostType, number>(
  COMM_ACTION,
  postsAPI.getPost
);
