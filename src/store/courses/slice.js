import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseData: [],
  languages: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setLanguagesAction: (state, action) => {
      state.languages = action.payload;
    },
  },
});

export const { setLanguagesAction } = coursesSlice.actions;
export default coursesSlice.reducer;
