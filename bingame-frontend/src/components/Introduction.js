import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from '../components/NavBar';

function Introduction() {
  return (
    <>
        <Typography variant="h6" className={classes.title}>
            Welcome to my page!
        </Typography>
    </>
  );
}

export default Introduction;
