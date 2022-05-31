import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">Home Page</Link>
        <Link to="/courses/mostDiscussed">Most discussed</Link>
      </Toolbar>
    </AppBar>
  );
};
export { Navigation };
