import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourseById, setRating } from "../../store/courses/actions";
import { useParams } from "react-router-dom";
import { selectCurrentCourse } from "../../store/courses/selector";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CourseDetails = (props) => {
  const dispatch = useDispatch();
  const { courseId, languageId } = useParams();

  const { title, imageUrl, description, rating, createdAt } = props.course;
  const { Level } = props.course;
  const { name } = Level;
  const [value, setValue] = useState(rating);

  useEffect(() => {
    dispatch(getCourseById(courseId, languageId));
  }, [dispatch]);
  return (
    <Box display="flex" flexDirection="row" mb={3}>
      <Box>
        <Box display="flex">
          <Box>
            <Typography variant="body2" color="text.secondary">
              {new Date(createdAt).toLocaleDateString("en-US")}
            </Typography>
          </Box>
          <Box ml="auto">
            <Typography variant="body2" color="text.secondary">
              level {name}
            </Typography>
          </Box>
        </Box>
        <Card sx={{ width: 250 }}>
          <CardMedia component="img" height="140" image={imageUrl} alt="" />
        </Card>
        <Box mt={1} display="flex" justifyContent="center">
          <Rating
            name="courseRating"
            value={value}
            onChange={(event, newValue) => {
              dispatch(setRating(courseId, languageId, newValue));
              setValue(newValue);
            }}
          />
        </Box>
      </Box>
      <Box ml={3} mt={2}>
        <Typography gutterBottom variant="h5" component="div" align="left">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {description}
        </Typography>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained">become a participant</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default CourseDetails;
