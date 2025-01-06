// import API_URLS from "../../config/API_URLS";
import API_URLS from "../../config/API_URLS";
import { axiosInstance } from "../../utils/Axios";

const getAllUsers = async () => {
  try {
    const data = await axiosInstance.get(API_URLS.Admin.getAllUsers);
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

export default getAllUsers;
