import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/auth/action";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { selectUserData } from "../../store/auth/selector";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isAuthor: false,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const registerNewUser = () => {
    dispatch(createUser(values));
  };

  const userData = useSelector(selectUserData);
  useEffect(() => {
    if (userData && userData.token) {
      navigate("/");
    }
  }, [userData.token]);

  return (
    <Box width="50%" mt={2} ml="auto" mr="auto">
      <Typography gutterBottom variant="h5" component="div" align="left">
        Sign Up
      </Typography>
      <Stack spacing={2} mt={3}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          value={values.password}
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
        <Button onClick={registerNewUser} variant="contained" size="large">
          Register
        </Button>
      </Box>
    </Box>
  );
};
export default SignUpForm;
