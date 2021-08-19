import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Container } from "@material-ui/core";

function MainPage() {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Button
            className={classes.neonBtn}
            fullWidth
            variant="outlined"
            color="primary"
            href="/login"
          >
            Log In
          </Button>
          <Button
            className={classes.neonBtn}
            fullWidth
            variant="outlined"
            color="primary"
            href="/signup"
          >
            Sign Up
          </Button>
        </div>
      </Container>
    </>
  );
}

export default MainPage;
