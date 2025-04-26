import API_URLS from "../../config/API_URLS";
import { axiosInstance } from "../../utils/Axios";

const addNewQuery = async ({ name, phone, serviceId, city }) => {
  const reqBody = { name, phone, serviceId, city, queryStatus: "NEW" };
  try {
    const data = await axiosInstance.post(
      `${API_URLS.Query.newQuery}`,
      reqBody
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

// Below APIs are for Admins
const getAllQuery = async () => {
  try {
    const data = await axiosInstance.get(API_URLS.Query.getAllQuery);
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const updateQueryStatus = async ({ queryId, status }) => {
  try {
    const data = await axiosInstance.patch(
      `${API_URLS.Query.updateQueryStatus}${queryId}/status?status=${status}`
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const getQueryWithFilter = async ({ status }) => {
  try {
    const data = await axiosInstance.get(
      `${API_URLS.Query.getQueryWithFilter}${status}`
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

export { addNewQuery, getAllQuery, updateQueryStatus, getQueryWithFilter };
