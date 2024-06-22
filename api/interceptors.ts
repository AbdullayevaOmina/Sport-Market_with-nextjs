import axios from "axios";
import { getAccessToken } from "@/helpers/auth-helpers";

const http = axios.create({
  baseURL: "http://store.go-clothes.uz:5555/v1",
});

http.interceptors.request.use((config) => {
  let access_token = getAccessToken();
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

export default http;
