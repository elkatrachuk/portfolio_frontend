import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CommentCard from "./CommentCard";
import CommentsForm from "./CommentsForm";

const Comments = (props) => {
  const comments = props.comments;
  return (
    <Box mt={5}>
      <Typography gutterBottom variant="h5" component="div" align="left">
        Comments
      </Typography>
      {comments.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />;
      })}
      <CommentsForm />
    </Box>
  );
};
export default Comments;
