const selectLanguages = (reduxState) => reduxState.coursesReducer.languages;
const selectCoursesData = (reduxState) => reduxState.coursesReducer.coursesData;
const selectCurrentCourse = (reduxState) =>
  reduxState.coursesReducer.currentCourse;

export { selectLanguages, selectCoursesData, selectCurrentCourse };
