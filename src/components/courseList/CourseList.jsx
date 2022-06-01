import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoursesByLanguageId } from "../../store/courses/actions";
import { selectCourses } from "../../store/courses/selector";
import CourseCard from "../courseCard/CourseCard";
import Box from "@mui/material/Box";

const CourseList = () => {
  const dispatch = useDispatch();
  const { languageId } = useParams();

  const courses = useSelector(selectCourses);

  useEffect(() => {
    dispatch(getCoursesByLanguageId(languageId));
  }, [dispatch]);
  return (
    <Box
      ml={5}
      mr={5}
      // display="flex"
      // flexDirection="row"
      // alignItems="stretch"
      // padding={10}
      // flexWrap="wrap"
      // justifyContent="space-around"
    >
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </Box>
  );
};
export default CourseList;
