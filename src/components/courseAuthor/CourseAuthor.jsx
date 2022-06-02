import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const CourseAuthor = (props) => {
  const { name, avatar, description } = props.author;
  return (
    <Box mt={5}>
      <Typography gutterBottom variant="h5" component="div" align="left">
        Course Author
      </Typography>
      <Box display="flex">
        <Box>
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography align="center" variant="h6">
              {name}
            </Typography>
          </Box>
        </Box>
        <Box ml={4}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default CourseAuthor;
