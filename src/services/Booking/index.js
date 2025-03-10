import API_URLS from "../../config/API_URLS";
import { axiosInstanceLogin } from "../../utils/Axios";

const getServiceCart = async ({ userId }) => {
  try {
    const data = await axiosInstanceLogin.get(
      `${API_URLS.Booking.getCartDetails}${userId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const createNewBooking = async ({ reqBody }) => {
  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Booking.createBooking,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export { createNewBooking, getServiceCart };
