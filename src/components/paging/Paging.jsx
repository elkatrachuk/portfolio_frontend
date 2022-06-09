import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paging = (props) => {
  const { pageCount, page, handlePagingChange } = props;

  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} onChange={handlePagingChange} />
    </Stack>
  );
};
export default Paging;
