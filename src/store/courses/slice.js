import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coursesData: {
    rows: [],
    count: 0,
  },
  languages: [],
  currentCourse: null,
  filters: null,
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
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setCommentAction: (state, action) => {
      state.currentCourse.Comments = [
        ...state.currentCourse.Comments,
        action.payload,
      ];
    },
  },
});

export const {
  setLanguagesAction,
  setCoursesAction,
  setCurrentCourseAction,
  setFilters,
  setCommentAction,
} = coursesSlice.actions;
export default coursesSlice.reducer;
