const API_URLS = {
  baseURL: "https://skynapi.duckdns.org/api/v1",
  Admin: {
    getAllUsers: "users/all",
    availableTechnicians: "admin/available-technicians",
  },
  Auth: {
    login: "/auth/login",
    registerUser: "/auth/register",
    requestChangePassword: "/auth/request-password-change?email=",
    changePassword: "/auth/change-password",
  },
  Booking: {
    addServiceToCart: "/cart/add",
    updateServiceInCart: "/cart/update",
    getCartDetails: "/cart/",
    removeServiceFromCart: "/cart/remove/",
    clearCart: "/cart/clear/",
    reqBooking: "/booking/request",
    createBooking: "/booking/create",
  },
  Cart: {
    saveServiceCart: "/cart/add-update",
    getServiceCart: "/cart/",
  },
  Query: {
    newQuery: "/query/new",
    updateQueryStatus: "/query/",
    getAllQuery: "/query/all",
    getQueryWithFilter: "/query/status/",
  },
  Services: {
    getAllServices: "/services/all",
    createService: "/services/create",
  },
  Users: {
    addAddress: "/auth/user/add-address",
    getUserAddress: "/users/address",
    updateUserDetails: "/auth/update-user",
    updateUserAddress: "/auth/update-address",
    deleteUserAddress: "/auth/user/delete-address",
  },
};

export default API_URLS;
