import axios from "axios";
import { BASE_URL } from "./apiPaths";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
//request intercepter
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
//response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //handle common error globaly
    if (error.response) {
      if (error.response.status === 401) {
        //redirect to login page
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        console.log("Server error. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.log("Request timout. Please try again.");
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
