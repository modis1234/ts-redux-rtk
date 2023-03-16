import { GET_LOCALS } from "./actions";
import * as localsAPI from "../../api/locals";
import createThunk from "lib/createAsyncThunk";
import { LocalType } from "./types";

export const getLocals = createThunk<LocalType[]>(
  GET_LOCALS,
  localsAPI.getLocals
);

export const postLocals = createThunk<LocalType[], LocalType>(
  GET_LOCALS,
  localsAPI.postLocals
);
