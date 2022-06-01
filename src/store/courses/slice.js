import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coursesData: [],
  languages: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setLanguagesAction: (state, action) => {
      state.languages = action.payload;
    },
    setCoursesAction: (state, action) => {
      state.coursesData = action.payload;
    },
  },
});

export const { setLanguagesAction, setCoursesAction } = coursesSlice.actions;
export default coursesSlice.reducer;
