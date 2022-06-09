import CourseCard from "../courseCard/CourseCard";
import Box from "@mui/material/Box";
import Paging from "../paging/Paging";

const CourseList = (props) => {
  const { courses, rowsCount, page, handlePagingChange } = props;
  const pageCount = Math.ceil(rowsCount / 2);
  console.log("props", props);

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
