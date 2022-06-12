import axios from "axios";
import { setMessage } from "../app/slice";
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
    dispatch(logOut());
    return;
  }
  try {
    const response = await axios.get("http://localhost:4000/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setUser({ user: response.data }));
  } catch (error) {
    dispatch(logOut());
  }
};

const updateProfile =
  ({ values, image }) =>
  async (dispatch, getState) => {
    try {
      const { description, isAuthor } = values;
      const token = getState().authReducer.token;
      const response = await axios.patch(
        "http://localhost:4000/auth/update-profile",
        { avatar: image, description, isAuthor },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const resAvatar = response.data.avatar;
      const resDescription = response.data.description;
      const resIsAuthor = response.data.isAuthor;
      dispatch(
        setProfile({
          avatar: resAvatar,
          description: resDescription,
          isAuthor: resIsAuthor,
        })
      );
      dispatch(setMessage(true));
    } catch (error) {}
  };

export { createUser, loginUser, validateToken, updateProfile };
