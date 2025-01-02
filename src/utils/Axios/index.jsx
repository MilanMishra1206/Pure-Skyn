/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-else-return */
/* eslint-disable no-useless-catch */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from "axios";
import API_URLS from "../../config/API_URLS";

const axiosInstance = axios.create({
  baseURL: API_URLS.baseURL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem("token");
    config.headers = {
      accesstoken: token,
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data?.isError) {
      console.log("error", response.data?.isError);
    }
    return response.data;
  },
  (error) => Promise.reject(error?.response?.data)
);

export { axiosInstance };
