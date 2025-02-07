const API_URLS = {
  baseURL: "http://13.233.199.108:8080/api/v1",
  Auth: {
    login: "/auth/login",
    registerUser: "/auth/register",
    requestChangePassword: "/auth/request-password-change?email=",
    changePassword: "/auth/change-password",
  },
  Services: {
    getAllServices: "/services/all",
    createService: "/services/create",
  },
  Booking: {
    reqBooking: "/booking/request",
    createBooking: "/booking/create",
  },
  Users: {
    addAddress: "/auth/user/add-address",
    getUserAddress: "/users/address",
    updateUserDetails: "/auth/update",
  },
  Admin: {
    getAllUsers: "users/all",
    availableTechnicians: "admin/available-technicians",
  },
};

export default API_URLS;
