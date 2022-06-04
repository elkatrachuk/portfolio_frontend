import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: { coursesReducer, authReducer },
});

export default store;
