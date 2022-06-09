const selectLanguages = (reduxState) => reduxState.coursesReducer.languages;
const selectCoursesData = (reduxState) => reduxState.coursesReducer.coursesData;
const selectCurrentCourse = (reduxState) =>
  reduxState.coursesReducer.currentCourse;
const selectFilters = (reduxState) => reduxState.coursesReducer.filters;

export {
  selectLanguages,
  selectCoursesData,
  selectCurrentCourse,
  selectFilters,
};
