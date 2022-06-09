import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectMessage } from "../../store/app/selector";
import { setLoading, setMessage } from "../../store/app/slice";
import { selectUserData } from "../../store/auth/selector";
import { createNewCourse, getLanguages } from "../../store/courses/actions";
import { selectLanguages } from "../../store/courses/selector";
import Loading from "../loading/Loading";

const AddCourseForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    language: "",
    title: "",
    description: "",
    level: "",
    imageUrl: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const { language, title, description, level, imageUrl } = values;
    if (language && title && description && level && imageUrl) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [values]);

  const languages = useSelector(selectLanguages);
  const userData = useSelector(selectUserData);
  const loading = useSelector(selectLoading);
  const message = useSelector(selectMessage);

  const { user } = userData;

  // need select languages for input languages
  useEffect(() => {
    dispatch(getLanguages);
  }, [dispatch]);

  const addNewCourse = () => {
    dispatch(createNewCourse(values, setValues));
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setMessage(false));
  };

  return (
    <Box width="50%" mt={2} ml="auto" mr="auto">
      <Snackbar
        open={message}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          sx={{ padding: "20px 50px", fontSize: "16px" }}
          onClose={handleClose}
          variant="filled"
          severity="success"
        >
          Course was successfully created
        </Alert>
      </Snackbar>
      {true ? (
        // user && user.avatar && user.isAuthor && user.discription
        <Box>
          <Typography gutterBottom variant="h5" component="div" align="left">
            Add new course
          </Typography>

          <Stack spacing={2} mt={3}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                name="language"
                value={values.language}
                label="Language"
                onChange={handleChange}
              >
                {languages &&
                  languages.map((language) => {
                    return (
                      <MenuItem key={language.id} value={language.id}>
                        {language.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>

            <TextField
              name="title"
              label="Title"
              variant="outlined"
              value={values.title}
              onChange={handleChange}
            />
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              value={values.description}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel>Level</InputLabel>
              <Select
                name="level"
                value={values.level}
                label="Level"
                onChange={handleChange}
              >
                <MenuItem value={1}>Junior</MenuItem>
                <MenuItem value={2}>Middle</MenuItem>
                <MenuItem value={3}>Senior</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="imageUrl"
              label="Image link"
              variant="outlined"
              value={values.imageUrl}
              onChange={handleChange}
            />
          </Stack>
          <Box display=" flex" justifyContent="flex-end" mt={2}>
            {loading ? (
              <Box mr={8}>
                <Loading />
              </Box>
            ) : (
              <Button
                disabled={isButtonDisabled}
                onClick={addNewCourse}
                variant="contained"
                size="large"
              >
                Create course
              </Button>
            )}
          </Box>
        </Box>
      ) : (
        <Typography gutterBottom variant="body2" component="div" align="left">
          If you want to create a new course your have to create a profile
        </Typography>
      )}
    </Box>
  );
};
export default AddCourseForm;
