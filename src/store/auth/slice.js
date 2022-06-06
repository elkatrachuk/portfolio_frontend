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

    setUser: (state, action) => {
      state.user = action.payload.user;
    },

    setProfile: (state, action) => {
      state.user.avatar = action.payload.avatar;
      state.user.description = action.payload.description;
      state.user.isAuthor = action.payload.isAuthor;
    },
  },
});

export const { setNewUserData, logOut, setUser, setProfile } =
  newUserSlice.actions;
export default newUserSlice.reducer;
