import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CourseCard = (props) => {
  console.log("CARD", props);
  const { imageUrl, title, description } = props.course;
  return (
    <Box display="flex" flexDirection="row" mb={3}>
      <Box>
        <Card sx={{ width: 250 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Box>
      <Box ml={3}>
        <Typography gutterBottom variant="h5" component="div" align="left">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
export default CourseCard;
