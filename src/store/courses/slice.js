import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coursesData: [],
  languages: [],
  currentCourse: null,
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
    setCurrentCourseAction: (state, action) => {
      state.currentCourse = action.payload;
    },
  },
});

export const { setLanguagesAction, setCoursesAction, setCurrentCourseAction } =
  coursesSlice.actions;
export default coursesSlice.reducer;
