import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coursesData: {
    rows: [],
    count: 0,
  },
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
      state.coursesData.rows = action.payload.courses;
      state.coursesData.count = action.payload.rowsCount;
    },
    setCurrentCourseAction: (state, action) => {
      state.currentCourse = action.payload;
    },
  },
});

export const { setLanguagesAction, setCoursesAction, setCurrentCourseAction } =
  coursesSlice.actions;
export default coursesSlice.reducer;
