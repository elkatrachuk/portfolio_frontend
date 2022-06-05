import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
};
const newUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    setNewUserData: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
    },
  },
});

export const { setNewUserData, logOut } = newUserSlice.actions;
export default newUserSlice.reducer;
