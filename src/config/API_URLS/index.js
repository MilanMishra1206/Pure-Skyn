const API_URLS = {
  baseURL: "https://skynapi.duckdns.org/api/v1",
  Admin: {
    getAllUsers: "users/all",
    availableTechnicians: "admin/available-technicians",
    updateAdminDetails: "/admin/update",
  },
  Auth: {
    login: "/auth/login",
    loginAdmin: "/admin/login",
    registerUser: "/auth/register",
    registerAdmin: "/admin/register",
    requestChangePassword: "/auth/request-password-change",
    changePassword: "/auth/change-password",
  },
  Booking: {
    getCartDetails: "/cart/",
    reqBooking: "/booking/request",
    createBooking: "/booking/create",
    getUserBookings: "/booking",
    updateSession: "/session/update",
    updateSessionStatus: "/session", //session/{sessionId}/status?newStatus=PENDING
  },
  Cart: {
    saveServiceCart: "/cart/add-update",
    getServiceCart: "/cart/",
  },
  Products: {
    getAllProducts: "/products/all",
    getProductsByCategory: "/products/category",
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
