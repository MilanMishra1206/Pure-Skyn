import API_URLS from "../../config/API_URLS";
import { axiosInstanceLogin } from "../../utils/Axios";

const addUserAddress = async ({ userId, addressDetails }) => {
  const reqBody = { userId, address: addressDetails };
  try {
    const data = await axiosInstanceLogin.put(
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

const updateUserDetails = async ({ reqBody }) => {
  try {
    const data = await axiosInstanceLogin.put(
      API_URLS.Users.updateUserDetails,
      reqBody
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const updateUserAddress = async ({ reqBody }) => {
  try {
    const data = await axiosInstanceLogin.patch(
      API_URLS.Users.updateUserAddress,
      reqBody
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

export { addUserAddress, getUserAddress, updateUserDetails, updateUserAddress };
