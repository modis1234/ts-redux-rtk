import axios from "axios";
import { LocalType } from "modules/locals";

export async function getLocals() {
  const response = await axios.get<LocalType[]>(
    `http://192.168.0.39:9095/api/local/locals?siteIndex=SITE0001`
  );
  return response.data;
}

export async function postLocals(data: LocalType) {
  const response = await axios.post<LocalType>(
    `http://192.168.0.39:9095/api/local/locals?siteIndex=SITE0001`,
    data
  );
  return response.data;
}
