import axios from "axios";
import { setCoursesAction, setLanguagesAction } from "./slice";

const getLanguages = async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:4000/courses/languages");
    const languages = response.data;
    dispatch(setLanguagesAction(languages));
  } catch (error) {}
};
const getCoursesByLanguageId = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/courses/languages/${id}`
    );
    const courses = response.data;
    dispatch(setCoursesAction(courses));
  } catch (error) {}
};

export { getLanguages, getCoursesByLanguageId };
