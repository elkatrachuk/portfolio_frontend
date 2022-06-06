import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectToken, selectUserData } from "../../store/auth/selector";
import { updateProfile } from "../../store/auth/action";

const ProfileForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [values, setValues] = useState({
    avatar: "",
    description: "",
    isAuthor: false,
  });

  const handleUpdateProfile = () => {
    dispatch(updateProfile(values));
  };

  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };
  return (
    <Box width="50%" mt={2} ml="auto" mr="auto">
      <Typography gutterBottom variant="h5" component="div" align="left">
        Profile
      </Typography>

      <Stack spacing={2} mt={3}>
        <TextField
          name="avatar"
          label="Avatar"
          variant="outlined"
          value={values.avatar}
          onChange={handleChange}
        />
        <TextareaAutosize
          name="description"
          maxRows={7}
          minRows={7}
          placeholder="Enter your description here"
          defaultValue={values.description}
          style={{ width: "100%", boxSizing: "border-box" }}
          onChange={handleChange}
        />
      </Stack>
      <Box mt={2}>
        <FormControlLabel
          control={
            <Checkbox
              name="isAuthor"
              checked={values.isAuthor}
              onChange={handleChange}
            />
          }
          label="I am course author"
        />
      </Box>
      {userData?.user && userData.user.author?.length && (
        <Box mt={2} mb={2}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            {userData.user.author.map((course) => {
              return (
                <Link
                  style={{
                    color: "#1976d2",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                  to={`/languages/${course.languageId}/courses/${course.id}`}
                  key={course.id}
                >
                  {course.title}
                </Link>
              );
            })}
          </Stack>
        </Box>
      )}
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button onClick={handleUpdateProfile} variant="contained" size="large">
          Apply
        </Button>
      </Box>
    </Box>
  );
};
export default ProfileForm;
