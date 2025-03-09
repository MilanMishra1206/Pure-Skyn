import { combineReducers } from "redux";
import * as types from "../Types";

const userInitialState = {
  userProfile: {},
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case types.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case types.SET_USER_ADDRESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          addresses: action.payload.addresses,
        },
      };
    case types.REMOVE_ADDRESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          addresses: state.userProfile.addresses.filter((address) =>
            action.payload.some((item) => item.id === address.id)
          ),
        },
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        userProfile: {},
      };
    default:
      return state;
  }
};

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case types.EMPTY_CART:
      return {
        ...state,
        items: [],
      };

    case types.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.productId.id
            ? { ...item, quantity: action.payload.productId.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const servicesInitialState = {
  services: [],
};

const servicesCartReducer = (state = servicesInitialState, action) => {
  switch (action.type) {
    case types.SET_SERVICES_ON_LOGIN:
      const mergedServices = [
        ...state.services,
        ...action.payload.filter(
          (apiService) =>
            !state.services.some(
              (reduxService) =>
                reduxService.featureName === apiService.featureName
            )
        ),
      ];
      return {
        ...state,
        services: mergedServices,
      };

    case types.ADD_TO_SERVICE_CART:
      const existingIndex = state.services.findIndex(
        (service) => service.featureName === action.payload.featureName
      );
      if (existingIndex !== -1) {
        const updatedServices = [...state.services];
        updatedServices[existingIndex] = {
          ...updatedServices[existingIndex],
          ...action.payload,
        };

        return {
          ...state,
          services: updatedServices,
        };
      } else {
        return {
          ...state,
          services: [...state.services, { ...action.payload, quantity: 1 }],
        };
      }

    case types.REMOVE_FROM_SERVICE_CART:
      return {
        ...state,
        services: state.services.filter(
          (service) => service.subServiceId !== action.payload
        ),
      };

    case types.EMPTY_SERVICE_CART:
      return {
        ...state,
        services: [],
      };

    default:
      return state;
  }
};

const appReducer = combineReducers({
  cart: cartReducer,
  userProfile: userReducer,
  servicesCart: servicesCartReducer,
});

export default appReducer;
