import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  message: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setLoading, setMessage } = appSlice.actions;
export default appSlice.reducer;
