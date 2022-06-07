import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPaging } from "../../store/courses/actions";
import { useParams } from "react-router-dom";

const Paging = (props) => {
  const { pageCount } = props;
  const { languageId } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch(setPaging(page, 2, languageId));
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </Stack>
  );
};
export default Paging;
