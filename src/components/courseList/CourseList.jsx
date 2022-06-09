import CourseCard from "../courseCard/CourseCard";
import Box from "@mui/material/Box";
import Paging from "../paging/Paging";
import { COURSES_LIST_LIMIT } from "../../config/globalConstants";

const CourseList = (props) => {
  const { courses, rowsCount, page, handlePagingChange } = props;
  const pageCount = Math.ceil(rowsCount / COURSES_LIST_LIMIT);

  return (
    <Box ml={5} mr={5}>
      {courses &&
        courses.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      {courses && pageCount > 1 && (
        <Box display="flex" justifyContent="flex-end">
          <Paging
            handlePagingChange={handlePagingChange}
            page={page}
            pageCount={pageCount}
          />
        </Box>
      )}
    </Box>
  );
};
export default CourseList;
