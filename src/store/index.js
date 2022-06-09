import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/slice";
import authReducer from "./auth/slice";
import appReducer from "./app/slice";

const store = configureStore({
  reducer: { coursesReducer, authReducer, appReducer },
});

export default store;
