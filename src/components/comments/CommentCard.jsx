import { Avatar, Box, Divider, Typography } from "@mui/material";

const CommentCard = (props) => {
  const { text } = props.comment;
  const { name, avatar } = props.comment.User;
  return (
    <Box>
      <Typography
        variant="h6"
        color="text.secondary"
        display="flex"
        alignItems="center"
      >
        <Avatar alt={name} src={avatar} sx={{ marginRight: 2 }} />
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
        {text}
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
    </Box>
  );
};
export default CommentCard;
