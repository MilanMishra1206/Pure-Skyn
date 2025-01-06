// import API_URLS from "../../config/API_URLS";
import API_URLS from "../../config/API_URLS";
import { axiosInstance } from "../../utils/Axios";

const createNewBooking = async ({
  userId,
  serviceId,
  pinCode,
  date,
  timeSlot,
}) => {
  const reqBody = { userId, serviceId, pinCode, date, timeSlot };
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
