import API_URLS from "../../config/API_URLS";
import { axiosInstanceLogin } from "../../utils/Axios";

const getServiceCart = async ({ userId }) => {
  try {
    const data = await axiosInstanceLogin.get(
      `${API_URLS.Cart.getServiceCart}${userId}`
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const saveServiceCart = async ({ reqBody }) => {
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Cart.saveServiceCart,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export { getServiceCart, saveServiceCart };
