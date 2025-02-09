// import API_URLS from "../../config/API_URLS";
import API_URLS from "../../config/API_URLS";
import { axiosInstanceLogin } from "../../utils/Axios";

const getAllServices = async () => {
  try {
    const data = await axiosInstanceLogin.get(API_URLS.Services.getAllServices);
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const createNewService = async ({ name, description, type, price }) => {
  const reqBody = { name, description, type, price };
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Services.createService,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export { getAllServices, createNewService };
