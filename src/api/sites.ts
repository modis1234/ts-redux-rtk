import axios from "axios";
import { SiteType } from "modules/sites";

export async function getSites() {
  const response = await axios.get<SiteType[]>(
    `http://192.168.0.39:9095/api/site/sites?siteIndex=SITE0001`
  );
  return response.data;
}

export async function postSites(data: SiteType) {
  console.log("postSites->", data);
  const response = await axios.post<SiteType>(
    `http://192.168.0.39:9095/api/site/sites?siteIndex=SITE0001`,
    data
  );
  return response.data;
}
