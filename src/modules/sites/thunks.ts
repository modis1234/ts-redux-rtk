import { GET_SITES, POST_SITES } from "./actions";
import * as sitesAPI from "../../api/sites";
import createThunk from "lib/createAsyncThunk";
import { SiteType } from "./types";

export const getSites = createThunk<SiteType[]>(GET_SITES, sitesAPI.getSites);

export const postSites = createThunk<SiteType[], SiteType>(
  POST_SITES,
  sitesAPI.postSites
);
