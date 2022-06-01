const selectLanguages = (reduxState) => reduxState.coursesReducer.languages;
const selectCourses = (reduxState) => reduxState.coursesReducer.coursesData;
const selectCurrentCourse = (reduxState) =>
  reduxState.coursesReducer.currentCourse;

export { selectLanguages, selectCourses, selectCurrentCourse };
