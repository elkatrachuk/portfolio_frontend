import axios from "axios";
import {
  setCoursesAction,
  setCurrentCourseAction,
  setLanguagesAction,
} from "./slice";

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
    const courses = response.data.rows;
    const rowsCount = response.data.count;
    console.log("VVVVVV", response);
    dispatch(setCoursesAction({ courses, rowsCount }));
  } catch (error) {}
};

const getCourseById = (courseId, languageId) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/courses/languages/${languageId}/courses/${courseId}`
    );
    const course = response.data;
    console.log("course", course);
    dispatch(setCurrentCourseAction(course));
  } catch (error) {}
};

const createNewCourse = (values) => async (dispatch, getState) => {
  try {
    const token = getState().authReducer.token;
    const { language, title, description, level, imageUrl } = values;
    const response = await axios.post(
      "http://localhost:4000/courses/create-new-course",
      { language, title, description, level, imageUrl },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const newCourse = response.data;
    console.log("newCourse", newCourse);
    // dispatch(setLanguagesAction(languages));
  } catch (error) {}
};

const setPaging = (page, limit, languageId) => async (dispatch, getState) => {
  try {
    console.log({ page, limit, languageId });
    const response = await axios.get(
      `http://localhost:4000/courses/languages/${languageId}`,
      { params: { page, limit } }
    );
    dispatch(setCoursesAction(response.data.rows));
    console.log("hkjvgf", response);
  } catch (error) {}
};

const setRating =
  (courseId, languageId, rating) => async (dispatch, getState) => {
    console.log("rating", { courseId, languageId, rating });
    try {
      const response = await axios.patch(
        `http://localhost:4000/courses/languages/${languageId}/courses/${courseId}`,
        { rating }
      );
      console.log("rating", response.data);
      // dispatch(setCurrentCourseAction(course));
    } catch (error) {}
  };

export {
  getLanguages,
  getCoursesByLanguageId,
  getCourseById,
  createNewCourse,
  setPaging,
  setRating,
};
