import axios from "axios";
import { setLanguagesAction } from "./slice";

const getLanguages = async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:4000/courses/languages");
    const languages = response.data;
    dispatch(setLanguagesAction(languages));
  } catch (error) {}
};
export { getLanguages };
