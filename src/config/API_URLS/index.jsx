const API_URLS = {
  baseURL: "https://pureSkyn.com/api/v1",
  Auth: {
    login: "auth/login",
    registerUser: "auth/register",
  },
  Services: {
    getAllServices: "services/all",
    createService: "services/create",
  },
  Booking: {
    createBooking: "booking/create",
  },
  Users: {
    getUserAddress: "users/address"
  },
  Admin: {
    getAllUsers: "users/all",
    availableTechnicians: "admin/available-technicians",
  },
};

export default API_URLS;
