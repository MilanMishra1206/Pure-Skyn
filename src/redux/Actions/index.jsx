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
