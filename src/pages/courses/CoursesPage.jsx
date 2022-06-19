import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CourseFilters } from "../../components/courseFilters/CourseFilters";
import CourseList from "../../components/courseList/CourseList";
import { selectCoursesData, selectFilters } from "../../store/courses/selector";
import {
  getCoursesByFilters,
  getCoursesByLanguageId,
} from "../../store/courses/actions";
import { COURSES_LIST_LIMIT } from "../../config/globalConstants";
import { setFilters } from "../../store/courses/slice";
import Loading from "../../components/loading/Loading";
import { selectLoading } from "../../store/app/selector";

const CoursesPage = () => {
  const dispatch = useDispatch();
  const { languageId } = useParams();
  const coursesData = useSelector(selectCoursesData);
  const courses = coursesData.rows;
  const rowsCount = coursesData.count;
  const [courseList, setCourseList] = useState(courses);
  const [page, setPage] = useState(1);

  const filters = useSelector(selectFilters);
  const loading = useSelector(selectLoading);

  const applyFilters = (filterValues) => {
    setPage(1);
    dispatch(setFilters(filterValues));
    dispatch(
      getCoursesByFilters({
        filterValues,
        page: 1,
        limit: COURSES_LIST_LIMIT,
        languageId,
      })
    );
  };
  const clearFilters = (setValues) => {
    setPage(1);
    dispatch(setFilters(null));
    setValues({ author: "", rating: "", levelId: "" });
    dispatch(
      getCoursesByFilters({
        page: 1,
        limit: COURSES_LIST_LIMIT,
        languageId,
      })
    );
  };

  const handlePagingChange = (event, value) => {
    setPage(value);
    dispatch(
      getCoursesByLanguageId({
        page: value,
        limit: COURSES_LIST_LIMIT,
        languageId,
        filterValues: filters,
      })
    );
  };

  useEffect(() => {
    dispatch(setFilters(null));
    dispatch(
      getCoursesByLanguageId({ page: 1, limit: COURSES_LIST_LIMIT, languageId })
    );
  }, [dispatch, languageId]);

  useEffect(() => {
    setCourseList(courses);
  }, [courses]);

  return (
    <Box pt={5} pb={5}>
      <CourseFilters clearFilters={clearFilters} applyFilters={applyFilters} />
      {loading ? (
        <Loading />
      ) : (
        <CourseList
          handlePagingChange={handlePagingChange}
          page={page}
          courses={courseList}
          rowsCount={rowsCount}
        />
      )}
    </Box>
  );
};
export default CoursesPage;
