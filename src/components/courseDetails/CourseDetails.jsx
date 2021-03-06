import { useDispatch, useSelector } from "react-redux";
import {
  becomeParticipant,
  deleteParticipant,
  setRating,
} from "../../store/courses/actions";
import { useParams } from "react-router-dom";
import { selectParticipantLoading } from "../../store/courses/selector";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Loading from "../loading/Loading";
import CourseParticipants from "../courseParticipants/CourseParticipants";

const CourseDetails = (props) => {
  const dispatch = useDispatch();
  const { courseId, languageId } = useParams();

  const participantLoading = useSelector(selectParticipantLoading);

  const { title, imageUrl, description, rating, createdAt } = props.course;
  const { Level } = props.course;
  const { name } = Level;
  const token = props?.token;
  const user = props.user;
  const userId = user?.id;
  const { participant } = props.course;
  const isParticipant = participant.find((item) => {
    return item.id === userId;
  });

  const [value, setValue] = useState(rating);

  const handleParticipant = () => {
    dispatch(becomeParticipant(languageId, courseId));
  };
  const cancelParticipant = () => {
    dispatch(deleteParticipant(languageId, courseId));
  };

  return (
    <>
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
          {participantLoading ? (
            <Box display="flex" justifyContent="flex-end" mt={2} mr={8}>
              <Loading />
            </Box>
          ) : isParticipant ? (
            <Box
              display="flex"
              justifyContent="flex-end"
              mt={2}
              alignItems="center"
            >
              <Typography variant="body2" mr={3}>
                You are already a participant of this course
              </Typography>
              <Button onClick={cancelParticipant} variant="contained">
                Leave the course
              </Button>
            </Box>
          ) : (
            token && (
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button onClick={handleParticipant} variant="contained">
                  become a participant
                </Button>
              </Box>
            )
          )}
        </Box>
      </Box>
      <CourseParticipants />
    </>
  );
};
export default CourseDetails;
