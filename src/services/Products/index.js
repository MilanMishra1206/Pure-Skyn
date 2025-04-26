import API_URLS from "../../config/API_URLS";
import { axiosInstance } from "../../utils/Axios";

const getAllProducts = async () => {
  try {
    const data = await axiosInstance.get(API_URLS.Products.getAllProducts);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const getProductsByCategory = async ({ category }) => {
  try {
    const data = await axiosInstance.get(
      `${API_URLS.Products.getProductsByCategory}/${category}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export { getAllProducts, getProductsByCategory };
