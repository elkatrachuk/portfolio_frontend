import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};
const newUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    setNewUserData: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { setNewUserData } = newUserSlice.actions;
export default newUserSlice.reducer;
