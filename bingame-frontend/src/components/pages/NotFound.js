import React from "react";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { useStyles } from "../Theme";

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm" className={classes.grow}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className={classes.formTitle}
        >
          404 - Not Found!
        </Typography>
        <Link href="/" variant="body2">
          Go to main page
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
