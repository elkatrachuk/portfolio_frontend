const selectLanguages = (reduxState) => reduxState.coursesReducer.languages;
const selectCoursesData = (reduxState) => reduxState.coursesReducer.coursesData;
const selectCurrentCourse = (reduxState) =>
  reduxState.coursesReducer.currentCourse;
const selectFilters = (reduxState) => reduxState.coursesReducer.filters;
const selectParticipantLoading = (reduxState) =>
  reduxState.coursesReducer.participantLoading;
const selectParticipant = (reduxState) =>
  reduxState.coursesReducer.currentCourse.participant;

export {
  selectLanguages,
  selectCoursesData,
  selectCurrentCourse,
  selectFilters,
  selectParticipantLoading,
  selectParticipant,
};
