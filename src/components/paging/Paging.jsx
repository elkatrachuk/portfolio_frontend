import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCoursesByLanguageId } from "../../store/courses/actions";
import { useParams } from "react-router-dom";
import { COURSES_LIST_LIMIT } from "../../config/globalConstants";

const Paging = (props) => {
  const { pageCount, page, handlePagingChange } = props;

  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} onChange={handlePagingChange} />
    </Stack>
  );
};
export default Paging;
