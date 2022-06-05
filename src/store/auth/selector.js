const selectUserData = (reduxState) => reduxState.authReducer;
const selectToken = (reduxState) => reduxState.authReducer.token;

export { selectUserData, selectToken };
