import API_URLS from "../../config/API_URLS";
import { axiosInstanceLogin } from "../../utils/Axios";

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

const createNewBooking = async ({
  userId,
  serviceId,
  name,
  email,
  mobile,
  address,
  treatmentDate,
  timeSlot,
  pinCode,
  treatment,
  laserOption,
}) => {
  const reqBody = {
    userId,
    serviceId,
    name,
    email,
    mobile,
    address,
    treatmentDate,
    timeSlot,
    pinCode,
    treatment,
    laserOption,
  };
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

export { requestBooking, createNewBooking };
