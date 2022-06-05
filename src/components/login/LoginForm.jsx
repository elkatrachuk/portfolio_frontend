import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginUser } from "../../store/auth/action";
import { selectUserData } from "../../store/auth/selector";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    dispatch(loginUser(values));
  };

  const userData = useSelector(selectUserData);
  useEffect(() => {
    if (userData && userData.token) {
      navigate("/");
    }
  }, [userData, navigate]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box width="50%" mt={2} ml="auto" mr="auto">
      <Typography gutterBottom variant="h5" component="div" align="left">
        Login
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        component="div"
        align="left"
        color="text.secondary"
      >
        If you don't have an account, please{" "}
        <Link
          to="/signup"
          style={{
            textDecoration: "underline",
            color: "#1976d2",
            fontWeight: "bold",
          }}
        >
          Sign up
        </Link>
      </Typography>

      <Stack spacing={2} mt={3}>
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
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
        />
      </Stack>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button onClick={login} variant="contained" size="large">
          Login
        </Button>
      </Box>
    </Box>
  );
};
export default LoginForm;
