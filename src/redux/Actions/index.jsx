import * as types from "../Types";

export const setUserProfile = (userProfile) => ({
  type: types.SET_USER_PROFILE,
  payload: userProfile,
});

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

export const addToServicesCart = (service) => ({
  type: types.ADD_TO_SERVICE_CART,
  payload: service,
});

export const removeFromServicesCart = (serviceId) => ({
  type: types.REMOVE_FROM_SERVICE_CART,
  payload: serviceId,
});

export const emptyServiceCart = () => ({
  type: types.EMPTY_SERVICE_CART,
});
