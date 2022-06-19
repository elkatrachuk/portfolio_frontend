import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { selectParticipant } from "../../store/courses/selector";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Collapse } from "@mui/material";
import { useState } from "react";

const CourseParticipants = () => {
  const [isVisible, setVisible] = useState(false);
  const participants = useSelector(selectParticipant);

  const toggleVisible = () => {
    setVisible(!isVisible);
  };

  return (
    <Box mt={2}>
      <Button
        variant="contained"
        onClick={toggleVisible}
        sx={{ marginBottom: 3, marginLeft: 7 }}
      >
        Participants
      </Button>
      <Collapse in={isVisible}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography gutterBottom variant="h5" component="div" align="left">
            Participants
          </Typography>
          <Grid container>
            {participants &&
              participants.map((participant) => {
                return (
                  <Grid item xs={4} key={participant.id}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar
                        alt={participant.name}
                        src={participant.avatar}
                        sx={{ marginRight: 2 }}
                      />
                      {participant.name}
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Paper>
      </Collapse>
    </Box>
  );
};
export default CourseParticipants;
