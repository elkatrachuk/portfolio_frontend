const selectLoading = (reduxState) => reduxState.appReducer.loading;
const selectMessage = (reduxState) => reduxState.appReducer.message;

export { selectLoading, selectMessage };
