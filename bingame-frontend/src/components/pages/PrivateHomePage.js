import React, {useState, useEffect} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Container, Grid, Typography } from "@material-ui/core";

function PrivateHomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid md={10} lg={8} container className={classes.grow} alignItems="center" style={{margin:"auto"}}>
        <CssBaseline />
        <Grid item xs={12} md={6} style={{padding:"2rem"}}>
            <Typography variant="h3">Let's learn together how to convert decimal number to binary.</Typography>
            <Typography variant="h5">
              Computers use the binary number system to manipulate and store all of their data including numbers, words, videos, graphics, and music.
            </Typography>
          </Grid>
       
      </Grid>
    </>
  );
}

export default PrivateHomePage;
