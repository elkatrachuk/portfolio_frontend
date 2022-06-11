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
import { Link } from "react-router-dom";
import { selectLoading, selectMessage } from "../../store/app/selector";
import { setMessage } from "../../store/app/slice";
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
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const { language, title, description, level } = values;
    if (language && title && description && level) {
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

  const [image, setImage] = useState();

  const addNewCourse = () => {
    dispatch(createNewCourse({ values, setValues, image }));
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "i1yxelru");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dud55b6nb/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.url); //put the url in local state, next step you can send it to the backend
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
      {user && user.isAuthor ? (
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
            <Button variant="contained" component="label">
              Upload File <input onChange={uploadImage} type="file" hidden />
            </Button>
            <Box>
              <img
                alt=""
                width="100px"
                src={
                  image
                    ? image
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
              />
              {image && (
                <Box style={{ fontSize: 20 }}>Succesfully uploaded!</Box>
              )}
            </Box>
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
        <Typography gutterBottom variant="body2" component="div" align="center">
          If you want to create a new course, your have to create a{" "}
          <Link
            style={{ fontWeight: "bold", textDecoration: "underline" }}
            to="/profile"
          >
            profile
          </Link>{" "}
          as an author.
        </Typography>
      )}
    </Box>
  );
};
export default AddCourseForm;
