import axios from "axios";
import { setLoading, setMessage } from "../app/slice";
import {
  setCoursesAction,
  setCurrentCourseAction,
  setLanguagesAction,
} from "./slice";

const getLanguages = async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("http://localhost:4000/courses/languages");
    const languages = response.data;
    dispatch(setLanguagesAction(languages));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

const getCoursesByLanguageId = (params) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const { page, limit, languageId, filterValues } = params;
    const response = await axios.get(
      `http://localhost:4000/courses/languages/${languageId}`,
      { params: { page, limit, filterValues } }
    );
    const courses = response.data.rows;
    const rowsCount = response.data.count;
    dispatch(setCoursesAction({ courses, rowsCount }));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

const getCoursesByFilters = (params) => async (dispatch, getState) => {
  try {
    const { page, limit, languageId, filterValues } = params;
    const response = await axios.get(
      `http://localhost:4000/courses/languages/${languageId}`,
      { params: { page, limit, filterValues } }
    );
    const courses = response.data.rows;
    const rowsCount = response.data.count;
    dispatch(setCoursesAction({ courses, rowsCount }));
  } catch (error) {}
};

const getCourseById = (courseId, languageId) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `http://localhost:4000/courses/languages/${languageId}/courses/${courseId}`
    );
    const course = response.data;
    dispatch(setCurrentCourseAction(course));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

const createNewCourse =
  ({ values, setValues, image }) =>
  async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const token = getState().authReducer.token;
      const { language, title, description, level } = values;
      await axios.post(
        "http://localhost:4000/courses/create-new-course",
        { language, title, description, level, imageUrl: image },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(setLoading(false));
      dispatch(setMessage(true));
      setValues({
        language: "",
        title: "",
        description: "",
        level: "",
        imageUrl: "",
      });
    } catch (error) {
      dispatch(setLoading(false));
    }
  };

const setRating =
  (courseId, languageId, rating) => async (dispatch, getState) => {
    try {
      await axios.patch(
        `http://localhost:4000/courses/languages/${languageId}/courses/${courseId}`,
        { rating }
      );
    } catch (error) {}
  };

const becomeParticipant =
  (languageId, courseId) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const token = getState().authReducer.token;
      const response = await axios.post(
        `http://localhost:4000/courses/languages/${languageId}/courses/${courseId}/become-participant`,
        { languageId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const course = response.data;
      dispatch(setLoading(false));
      dispatch(setCurrentCourseAction(course));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };

const addComment = (courseId, text) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const token = getState().authReducer.token;
    const response = await axios.post(
      `http://localhost:4000/courses/${courseId}/add-comment`,
      { courseId, text },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const course = response.data;
    dispatch(setLoading(false));
    dispatch(setCurrentCourseAction(course));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export {
  getLanguages,
  getCoursesByLanguageId,
  getCoursesByFilters,
  getCourseById,
  createNewCourse,
  setRating,
  becomeParticipant,
  addComment,
};
