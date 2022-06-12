import {
  Alert,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Snackbar,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectToken, selectUserData } from "../../store/auth/selector";
import { updateProfile } from "../../store/auth/action";
import { selectMessage } from "../../store/app/selector";
import MessageBox from "../messageBox/MessageBox";
import { setMessage } from "../../store/app/slice";

const ProfileForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const avatar = userData.user?.avatar || "";
  const description = userData.user?.description || "";
  const isAuthor = userData.user?.isAuthor || false;

  const [values, setValues] = useState({
    description: "",
    isAuthor: false,
  });

  useEffect(() => {
    setValues({
      description,
      isAuthor,
    });
  }, [description, isAuthor]);

  const token = useSelector(selectToken);
  const message = useSelector(selectMessage);

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

  const [image, setImage] = useState({
    url: "",
    uploaded: false,
  });
  useEffect(() => {
    setImage({ url: avatar, uploaded: false });
  }, [avatar]);

  const handleUpdateProfile = () => {
    dispatch(updateProfile({ values, image: image.url }));
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
    setImage({ url: file.url, uploaded: true }); //put the url in local state, next step you can send it to the backend
    dispatch(setMessage(true));
  };

  return (
    <Box width="50%" mt={2} ml="auto" mr="auto">
      <Typography gutterBottom variant="h5" component="div" align="left">
        Profile
      </Typography>

      <Stack spacing={2} mt={3}>
        <Button variant="contained" component="label">
          Upload File <input onChange={uploadImage} type="file" hidden />
        </Button>
        <Box>
          <img
            alt=""
            width="100px"
            src={
              image.url
                ? image.url
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            }
          />
          <MessageBox open={message} text="Profile was successfully updated!" />
        </Box>
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
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button onClick={handleUpdateProfile} variant="contained" size="large">
          Apply
        </Button>
      </Box>
      {userData?.user && userData.user.author?.length > 0 && (
        <Box mt={5} mb={2}>
          <Typography gutterBottom variant="h5" component="div" align="left">
            Your courses
          </Typography>
          <Stack
            mt={3}
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
    </Box>
  );
};
export default ProfileForm;
