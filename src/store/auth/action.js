import axios from "axios";
import SignUpForm from "../../components/signUp/SignUpForm";
import { setNewUserData, logOut, setUser, setProfile } from "./slice";

const createUser = (values) => async (dispatch, getState) => {
  const { name, email, password, isAuthor } = values;
  try {
    const response = await axios.post("http://localhost:4000/auth/signup", {
      name,
      email,
      password,
      isAuthor,
    });
    dispatch(setNewUserData(response.data));
  } catch (error) {}
};

const loginUser = (values) => async (dispatch, getState) => {
  const { email, password } = values;
  try {
    const response = await axios.post("http://localhost:4000/auth/login", {
      email,
      password,
    });
    dispatch(setNewUserData(response.data));
  } catch (error) {}
};

const validateToken = async (dispatch, getState) => {
  const token = getState().authReducer.token;
  if (!token) {
    return;
  }
  try {
    const response = await axios.get("http://localhost:4000/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setUser({ user: response.data }));
    console.log(response);
  } catch (error) {
    console.log("error", error);
    dispatch(logOut());
  }
};

const updateProfile = (values) => async (dispatch, getState) => {
  try {
    const { avatar, description, isAuthor } = values;
    console.log("discription", description);
    const token = getState().authReducer.token;
    const response = await axios.patch(
      "http://localhost:4000/auth/update-profile",
      { avatar, description, isAuthor },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(setProfile({ avatar, description, isAuthor }));
  } catch (error) {}
};

export { createUser, loginUser, validateToken, updateProfile };
