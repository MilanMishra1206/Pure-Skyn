import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./Reducers";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)) //thunk is for async operations
);

export const persistor = persistStore(store);
