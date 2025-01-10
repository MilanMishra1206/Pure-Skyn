// import API_URLS from "../../config/API_URLS";
import API_URLS from "../../config/API_URLS";
import { axiosInstance } from "../../utils/Axios";

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

export default createNewBooking;
