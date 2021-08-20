import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Container, CssBaseline } from "@material-ui/core";
import clsx from "clsx";

function Register() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {};

  return (
    <>
      <Container component="main" maxWidth="xs" className={classes.grow}>
        <CssBaseline />
        <div className={classes.paper}>
          <form onSubmit={registerHandler} className={classes.form}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.formTitle}
              color="primary"
            >
              Sign Up
            </Typography>
            {error && <span className="error">{error}</span>}
            <TextField
              className={classes.input}
              fullWidth
              margin="normal"
              required
              id="username"
              label="Username"
              variant="outlined"
              type="text"
            />
            <TextField
              className={classes.input}
              fullWidth
              margin="normal"
              required
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              autoComplete="email"
            />
            <TextField
              className={classes.input}
              fullWidth
              margin="normal"
              required
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            />
            <TextField
              className={classes.input}
              fullWidth
              margin="normal"
              required
              id="confirmedPassword"
              label="Confirmed Password"
              variant="outlined"
              type="password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={clsx(classes.btn, classes.margin)}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Register;
