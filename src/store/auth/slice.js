import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  newUser: null,
};
const newUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    setNewUserData: (state, action) => {
      state.token = action.payload.token;
      state.newUser = action.payload.newUser;
    },
  },
});

export const { setNewUserData } = newUserSlice.actions;
export default newUserSlice.reducer;
