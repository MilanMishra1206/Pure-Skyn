const API_URLS = {
  baseURL: "https://pureSkyn.com/api/v1/",
  Auth: {
    login: "auth/login",
    registerUser: "auth/register/user",
    registerAdmin: "auth/register/admin",
  },
  Services: {
    getAllServices: "services/all",
    createService: "services/create",
  },
  Booking: {
    createBooking: "booking/create",
  },
  Admin: {
    getAllUsers: "/users/all",
  },
};

export default API_URLS;
