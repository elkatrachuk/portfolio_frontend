import { Box, Button, TextareaAutosize } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../../store/courses/actions";

const CommentsForm = () => {
  const dispatch = useDispatch();

  const [textAreaValue, setTextAreaValue] = useState("");

  const { courseId } = useParams();

  const handleComment = () => {
    dispatch(addComment(courseId, textAreaValue));
  };
  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <Box mt={2}>
      <TextareaAutosize
        value={textAreaValue}
        onChange={handleChange}
        maxRows={7}
        minRows={7}
        placeholder="Enter your comment here"
        style={{ width: "100%" }}
      />
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button
          onClick={handleComment}
          variant="contained"
          disabled={!textAreaValue}
        >
          Add comment
        </Button>
      </Box>
    </Box>
  );
};
export default CommentsForm;
