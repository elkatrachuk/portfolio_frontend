import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourseById } from "../../store/courses/actions";
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

const CourseDetails = () => {
  const dispatch = useDispatch();
  const { courseId, languageId } = useParams();

  const course = useSelector(selectCurrentCourse);

  const { title, imageUrl, description, rating, createdAt } = course;
  const [value, setValue] = useState(rating);

  useEffect(() => {
    dispatch(getCourseById(courseId, languageId));
  }, [dispatch]);
  return (
    <Box display="flex" flexDirection="row" mb={3} ml={5} mr={5}>
      <Box>
        {new Date(createdAt).toLocaleDateString("en-US")}
        <Card sx={{ width: 250 }}>
          <CardMedia component="img" height="140" image={imageUrl} alt="" />
        </Card>
        <Box mt={1}>
          <Rating
            name="courseRating"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </Box>
      <Box ml={3}>
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
