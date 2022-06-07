import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../store/auth/selector";
import { createNewCourse, getLanguages } from "../../store/courses/actions";
import { selectLanguages } from "../../store/courses/selector";

const AddCourseForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    language: "",
    title: "",
    description: "",
    level: "",
    imageUrl: "",
  });
  const languages = useSelector(selectLanguages);
  const userData = useSelector(selectUserData);
  const { user } = userData;

  useEffect(() => {
    dispatch(getLanguages);
  }, [dispatch]);
  console.log("languages", languages);

  const addNewCourse = () => {
    dispatch(createNewCourse(values));
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box width="50%" mt={2} ml="auto" mr="auto">
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
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button onClick={addNewCourse} variant="contained" size="large">
              Create course
            </Button>
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
