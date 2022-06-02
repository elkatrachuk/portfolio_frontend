import { Box, Button, TextareaAutosize } from "@mui/material";

const CommentsForm = () => {
  return (
    <Box mt={2}>
      <TextareaAutosize
        maxRows={7}
        minRows={7}
        placeholder="Enter your comment here"
        defaultValue=""
        style={{ width: "100%" }}
      />
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="contained">Add comment</Button>
      </Box>
    </Box>
  );
};
export default CommentsForm;
