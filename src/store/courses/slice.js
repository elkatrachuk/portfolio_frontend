import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coursesData: {
    rows: [],
    count: 0,
  },
  languages: [],
  currentCourse: null,
  filters: null,
  participantLoading: false,
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
    setParticipantsAction: (state, action) => {
      state.currentCourse.participant = action.payload;
    },
    setParticipantLoadingAction: (state, action) => {
      state.participantLoading = action.payload;
    },
  },
});

export const {
  setLanguagesAction,
  setCoursesAction,
  setCurrentCourseAction,
  setFilters,
  setCommentAction,
  setParticipantsAction,
  setParticipantLoadingAction,
} = coursesSlice.actions;
export default coursesSlice.reducer;
