import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CommentCard from "./CommentCard";
import CommentsForm from "./CommentsForm";

const Comments = (props) => {
  const comments = props.comments;
  const token = props.token;
  return (
    <Box mt={5}>
      <Typography gutterBottom variant="h5" component="div" align="left">
        Comments
      </Typography>
      {comments.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />;
      })}
      {token && <CommentsForm />}
    </Box>
  );
};
export default Comments;
