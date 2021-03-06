import React, {useEffect} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/User/UserSlice";

function PublicHomePage({history}) {
  const classes = useStyles();
  const user = useSelector(selectUser);

  useEffect(() => {
    //if the user is logged in then redirect
    if (user.loggedIn) history.push("/menu");
  }, [history]);

  return (
    <>
      <Grid item md={8} container alignItems="center" className={classes.grow} style={{margin:"auto"}}>
        <CssBaseline />
        <Grid item xs={12} md={6} style={{padding:"2rem"}}>
            <Typography variant="h3">Let's learn together how to convert decimal number to binary.</Typography>
            <Typography variant="h5">
              Computers use the binary number system to manipulate and store all of their data including numbers, words, videos, graphics, and music.
            </Typography>
          </Grid>
        <Grid item  xs={12} md={6} style={{textAlign:"center", padding:"2rem"}}>
          <Typography variant="h5">
              Start with
            </Typography>
          <Button
            className={classes.neonBtn}
            fullWidth
            variant="outlined"
            color="primary"
            href="/login"
          >
            Log In
          </Button>
          <Typography variant="h5">
              or
            </Typography>
          <Button
            className={classes.neonBtn}
            fullWidth
            variant="outlined"
            color="primary"
            href="/signup"
          >
            Sign Up
          </Button>
          </Grid>
      </Grid>
    </>
  );
}

export default PublicHomePage;
