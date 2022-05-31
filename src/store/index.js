import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/slice";

const store = configureStore({
  reducer: { coursesReducer },
});

export default store;
