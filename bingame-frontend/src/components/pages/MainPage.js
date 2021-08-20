import React, {useState, useEffect} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Container, Typography } from "@material-ui/core";
import Typist from 'react-typist';

function MainPage() {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="sm" className={classes.grow}>
        <CssBaseline />
        <div className={classes.paper}>
          <div style={{minHeight: '25vh'}}> 
          <Typist
            cursor={{show: false}}
            >
            <Typography variant="h5">
              Computers use the binary number system to manipulate and store all of their data including numbers, words, videos, graphics, and music.
            </Typography>
            <Typography variant="h5">So let's learn together how to convert decimal number to binary.</Typography>
          </Typist>
          </div>
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
