import axios from "axios";
import SignUpForm from "../../components/signUp/SignUpForm";
import { setNewUserData } from "./slice";

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

export { createUser };
