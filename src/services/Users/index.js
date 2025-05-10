import API_URLS from "../../config/API_URLS";
import { axiosInstanceLogin } from "../../utils/Axios";

const addUserAddress = async ({ userId, addressDetails }) => {
  const reqBody = { userId, address: addressDetails };
  try {
    const data = await axiosInstanceLogin.post(
      `${API_URLS.Users.addAddress}`,
      reqBody
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const getUserAddress = async ({ userId }) => {
  try {
    const data = await axiosInstanceLogin.get(
      `${API_URLS.Users.getUserAddress}/${userId}`
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const updateUserDetails = async ({ isAdmin, reqBody }) => {
  const url = isAdmin
    ? API_URLS.Admin.updateAdminDetails
    : API_URLS.Users.updateUserDetails;
  try {
    const data = await axiosInstanceLogin.put(url, reqBody);
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const updateUserAddress = async ({ reqBody }) => {
  try {
    const data = await axiosInstanceLogin.put(
      API_URLS.Users.updateUserAddress,
      reqBody
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const deleteUserAddress = async ({ userId, addressId }) => {
  try {
    const data = await axiosInstanceLogin.delete(
      `${API_URLS.Users.deleteUserAddress}?userId=${userId}&addressId=${addressId}`
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

export {
  addUserAddress,
  getUserAddress,
  updateUserDetails,
  updateUserAddress,
  deleteUserAddress,
};
