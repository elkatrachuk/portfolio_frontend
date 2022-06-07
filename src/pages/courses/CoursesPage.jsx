import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CourseFilters } from "../../components/courseFilters/CourseFilters";
import CourseList from "../../components/courseList/CourseList";
import { selectCourses } from "../../store/courses/selector";
import { getCoursesByLanguageId } from "../../store/courses/actions";

const CoursesPage = () => {
  const dispatch = useDispatch();
  const { languageId } = useParams();
  const courses = useSelector(selectCourses);
  const [courseList, setCourseList] = useState(courses);

  const applyFilters = (filterValues) => {
    const { author, rating, levelId } = filterValues;
    const filteredCourses = courseList
      .filter((course) => {
        return rating ? course.rating === rating : true;
      })
      .filter((course) => {
        return levelId ? course.levelId === levelId : true;
      });
    setCourseList(filteredCourses);
  };

  useEffect(() => {
    dispatch(getCoursesByLanguageId(languageId));
  }, [dispatch, languageId]);

  useEffect(() => {
    setCourseList(courses);
  }, [courses]);

  return (
    <Box pt={5} pb={5}>
      <CourseFilters applyFilters={applyFilters} />
      <CourseList courses={courseList} />
    </Box>
  );
};
export default CoursesPage;
