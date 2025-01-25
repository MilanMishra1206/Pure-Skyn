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

const assignTechnician = async ({ bookingId, technicianId }) => {
  try {
    const data = await axiosInstance.put(
      `/admin/${bookingId}/assignTechnician?technicianId=${technicianId}`
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

const getAvailableTechnician = async ({ serviceId, date, timeSlot }) => {
  try {
    const data = await axiosInstance.get(
      `${API_URLS.Admin.availableTechnicians}?serviceId=${serviceId}&date=${date}&timeSlot=${timeSlot}`
    );
    return data;
  } catch (response) {
    throw new Error(response?.data?.error?.message);
  }
};

export { getAllUsers, assignTechnician, getAvailableTechnician };
