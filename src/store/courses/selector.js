const selectLanguages = (reduxState) => reduxState.coursesReducer.languages;
const selectCourses = (reduxState) => reduxState.coursesReducer.coursesData;

export { selectLanguages, selectCourses };
