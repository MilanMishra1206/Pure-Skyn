import API_URLS from "../../config/API_URLS";
import { axiosInstanceLogin } from "../../utils/Axios";

export const loginUser = async ({ email, password }) => {
  const reqBody = { email, password };
  try {
    const data = await axiosInstanceLogin.post(API_URLS.Auth.login, reqBody);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const registerUser = async ({ name, email, password, phone }) => {
  const reqBody = { name, email, password, phone };
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Auth.registerUser,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const loginAdmin = async ({ email, password }) => {
  const reqBody = { email, password };
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Auth.loginAdmin,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const registerAdmin = async ({ name, email, password, phone }) => {
  const params = { name, email, password, phone };
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Auth.registerAdmin,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const requestChangePassword = async ({ email }) => {
  
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Auth.requestChangePassword,
      { email }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const changePassword = async ({ token, oldPassword, newPassword }) => {
  const reqBody = { token, oldPassword, newPassword };
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Auth.changePassword,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
