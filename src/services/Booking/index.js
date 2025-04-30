import API_URLS from "../../config/API_URLS";
import { axiosInstance } from "../../utils/Axios";

const getServiceCart = async ({ userId }) => {
  try {
    const data = await axiosInstance.get(
      `${API_URLS.Booking.getCartDetails}${userId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const getUserBookings = async ({ userId }) => {
  try {
    const data = await axiosInstance.get(
      `${API_URLS.Booking.getUserBookings}/${userId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const createNewBooking = async ({ reqBody }) => {
  try {
    const data = await axiosInstance.post(
      API_URLS.Booking.createBooking,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const bookingSessionUpdate = async ({ reqBody }) => {
  try {
    const data = await axiosInstance.post(
      API_URLS.Booking.updateSession,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const sessionStatusUpdate = async ({ bookingId, status }) => {
  try {
    const data = await axiosInstance.patch(
      `${API_URLS.Booking.updateSessionStatus}/${bookingId}/status?newStatus=${status}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export {
  createNewBooking,
  getServiceCart,
  getUserBookings,
  bookingSessionUpdate,
  sessionStatusUpdate,
};
