import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const TopAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
export default TopAppBar;
