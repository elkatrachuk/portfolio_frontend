import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { imageUrl, title, description, id } = props.course;
  return (
    <Box display="flex" flexDirection="row" mb={3}>
      <Box>
        <Link to={`/languages/1/courses/${id}`}>
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
        </Link>
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
