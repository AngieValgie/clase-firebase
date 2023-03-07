import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducer/loadingReducer";
import { userReducer } from "../reducer/userReducer";

const reducer = {
  user: userReducer,
  loading: loadingReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
