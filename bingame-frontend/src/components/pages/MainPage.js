import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from '../Theme';
import NavBar from '../NavBar';

function MainPage() {
  const classes = useStyles();

  return (
    <>
      <Grid 
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', margin: "auto" }}
        xs={11}
        md={6}
        lg={4}
      >
          <Button className={classes.neonBtn} fullWidth variant="outlined" href="/login">Log In</Button>
          <Button className={classes.neonBtn} fullWidth variant="outlined" href="/register">Register</Button>
      </Grid>
    </>
  );
}

export default MainPage;
