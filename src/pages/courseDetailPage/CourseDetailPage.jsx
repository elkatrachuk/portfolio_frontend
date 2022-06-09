import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CourseDetails from "../../components/courseDetails/CourseDetails";
import { getCourseById } from "../../store/courses/actions";
import { selectCurrentCourse } from "../../store/courses/selector";
import CourseAuthor from "../../components/courseAuthor/CourseAuthor";
import Comments from "../../components/comments/Comments";
import Loading from "../../components/loading/Loading";
import { selectLoading } from "../../store/app/selector";
import { selectToken, selectUserData } from "../../store/auth/selector";

const CourseDetailPage = () => {
  const course = useSelector(selectCurrentCourse);
  const loading = useSelector(selectLoading);
  const userData = useSelector(selectUserData);
  const user = userData?.user;
  const token = useSelector(selectToken);

  const dispatch = useDispatch();
  const { languageId, courseId } = useParams();

  useEffect(() => {
    dispatch(getCourseById(courseId, languageId));
  }, [dispatch, courseId, languageId]);

  return (
    <>
      {loading ? (
        <Box mt={10}>
          <Loading />
        </Box>
      ) : (
        <Box p={5}>
          {course && (
            <CourseDetails course={course} user={user} token={token} />
          )}
          {course && course.author && <CourseAuthor author={course.author} />}
          {course && <Comments comments={course.Comments} token={token} />}
        </Box>
      )}
    </>
  );
};
export default CourseDetailPage;
