import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CourseDetails from "../../components/courseDetails/CourseDetails";
import { getCourseById } from "../../store/courses/actions";
import { selectCurrentCourse } from "../../store/courses/selector";
import CourseAuthor from "../../components/courseAuthor/CourseAuthor";
import Comments from "../../components/comments/Comments";

const CourseDetailPage = () => {
  const course = useSelector(selectCurrentCourse);
  const dispatch = useDispatch();
  const { languageId, courseId } = useParams();

  useEffect(() => {
    dispatch(getCourseById(languageId, courseId));
  }, []);

  return (
    <Box p={5}>
      {course && <CourseDetails course={course} />}
      {course && course.author && <CourseAuthor author={course.author} />}
      {course && <Comments comments={course.Comments} />}
    </Box>
  );
};
export default CourseDetailPage;
