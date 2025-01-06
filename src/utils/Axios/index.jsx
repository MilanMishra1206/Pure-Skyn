import axios from "axios";
import API_URLS from "../../config/API_URLS";

const axiosInstanceLogin = axios.create({
  baseURL: API_URLS.baseURL,
});

const axiosInstance = axios.create({
  baseURL: API_URLS.baseURL,
});

const token = () => sessionStorage.getItem("token") || "";

axiosInstanceLogin.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstanceLogin.interceptors.response.use(
  (response) => response.data,
  (error) => {
    Promise.reject(error?.response?.data);
  }
);

const getToken = async () => {
  const accessToken = token();
  try {
    if (!accessToken) {
      window.location.href = `${window.location.origin}/logout`;
      return null;
    }
    return accessToken;
  } catch (error) {
    window.location.href = `${window.location.origin}/logout`;
    return null;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...config.headers,
    };

    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    Promise.reject(error?.response?.data);
  }
);

export { axiosInstanceLogin };
