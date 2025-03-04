import { combineReducers } from "redux";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
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

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "EMPTY_CART":
      return {
        ...state,
        items: [],
      };

    case "UPDATE_QUANTITY":
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

const userInitialState = {
  userProfile: {},
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE":
      return {
        ...state,
        userProfile: action.payload,
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
    case "ADD_TO_SERVICE_CART":
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

    case "REMOVE_FROM_SERVICE_CART":
      return {
        ...state,
        services: state.services.filter(
          (service) => service.subServiceId !== action.payload
        ),
      };

    case "EMPTY_SERVICE_CART":
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
