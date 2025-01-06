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

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
  phone,
}) => {
  const reqBody = { firstName, lastName, email, password, phone, role: "user" };
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

export const registerAdmin = async ({
  firstName,
  lastName,
  email,
  password,
  phone,
}) => {
  const params = { firstName, lastName, email, password, phone, role: "admin" };
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Auth.registerUser,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
