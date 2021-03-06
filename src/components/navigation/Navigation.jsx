import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/auth/selector";
import { logOut } from "../../store/auth/slice";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const logout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <Link to="/">
            <Button
              color="inherit"
              sx={{ color: "white", textUnderline: "none", fontWeight: "bold" }}
            >
              Home Page
            </Button>
          </Link>
        </Box>
        {token && (
          <>
            <Box>
              <Link to="/addcourse">
                <Button
                  color="inherit"
                  sx={{
                    color: "white",
                    textUnderline: "none",
                    fontWeight: "bold",
                  }}
                >
                  Add course
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/profile">
                <Button
                  color="inherit"
                  sx={{
                    color: "white",
                    textUnderline: "none",
                    fontWeight: "bold",
                  }}
                >
                  Profile
                </Button>
              </Link>
            </Box>
          </>
        )}
        {!token ? (
          <Box ml="auto">
            <Link to="/login">
              <Button
                color="inherit"
                sx={{
                  color: "white",
                  textUnderline: "none",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        ) : (
          <Box ml="auto">
            <Button
              onClick={logout}
              color="inherit"
              sx={{
                color: "white",
                textUnderline: "none",
                fontWeight: "bold",
              }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export { Navigation };
