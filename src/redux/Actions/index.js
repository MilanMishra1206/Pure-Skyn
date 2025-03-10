import * as types from "../Types";

export const setUserProfile = (userProfile) => ({
  type: types.SET_USER_PROFILE,
  payload: userProfile,
});

export const setUserAddress = (addresses) => ({
  type: types.SET_USER_ADDRESS,
  payload: addresses,
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});

// actions for product cart
export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: types.REMOVE_FROM_CART,
  payload: productId,
});

export const emptyCart = () => ({
  type: types.EMPTY_CART,
});

export const updateQuantity = (productId, quantity) => ({
  type: types.UPDATE_QUANTITY,
  payload: { productId, quantity },
});

// actions for services cart

export const setServicesOnLogin = (services) => ({
  type: types.SET_SERVICES_ON_LOGIN,
  payload: services,
});

export const addToServicesCart = (service) => ({
  type: types.ADD_TO_SERVICE_CART,
  payload: service,
});

export const removeFromServicesCart = (subServiceId) => ({
  type: types.REMOVE_FROM_SERVICE_CART,
  payload: subServiceId,
});

export const emptyServiceCart = () => ({
  type: types.EMPTY_SERVICE_CART,
});
