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

const addServiceToCart = async ({
  userId,
  serviceId,
  subServiceId,
  quantity = 1,
}) => {
  const reqBody = { userId, serviceId, subServiceId, quantity };

  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Booking.addServiceToCart,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const updateServiceToCart = async ({
  userId,
  serviceId,
  subServiceId,
  quantity,
}) => {
  const reqBody = { userId, serviceId, subServiceId, quantity };

  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Booking.updateServiceInCart,
      reqBody
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const removeServiceFromCart = async ({ subServiceId }) => {
  try {
    const data = await axiosInstanceLogin.delete(
      `${API_URLS.Booking.removeServiceFromCart}${subServiceId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const emptyCart = async ({ userId }) => {
  try {
    const data = await axiosInstanceLogin.delete(
      `${API_URLS.Booking.clearCart}${userId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const requestBooking = async ({ serviceId, subServiceId, date }) => {
  const reqBody = {
    serviceId,
    subServiceId,
    date,
  };

  try {
    const data = await axiosInstanceLogin.post(
      API_URLS.Booking.reqBooking,
      reqBody
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

export {
  requestBooking,
  createNewBooking,
  addServiceToCart,
  updateServiceToCart,
  removeServiceFromCart,
  emptyCart,
  getServiceCart,
};
