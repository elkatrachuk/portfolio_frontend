import { Box, Typography } from "@mui/material";

const CommentCard = (props) => {
  const { text } = props.comment;
  const { name } = props.comment.User;
  return (
    <Box>
      <Typography variant="h6" color="text.secondary">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
};
export default CommentCard;
