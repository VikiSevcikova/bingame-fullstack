import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import Link from "@material-ui/core/Link";
import {
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
} from "@material-ui/core";
import clsx from "clsx";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { hideAlert, showAlert } from "../../features/Alert/AlertSlice";
import { logIn } from "../../features/User/UserSlice";

function Login({history}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) history.push("/menu");
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')

    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Basic ' + token,
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/login",
        JSON.stringify({ email, password }),
        config
      );
      localStorage.setItem("authToken", data.token);
      dispatch(logIn({username: data.user?.username, email: data.user?.email}))
      dispatch(showAlert({type: 'success', message: 'You are logged in!', show: true}));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);

      history.push("/menu");
    } catch (error) {
      dispatch(showAlert({type: 'error', message: error.response.data.error, show: true}));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);
    }

  };
  return (
    <>
      <Container component="main" maxWidth="sm" className={classes.grow}>
        <CssBaseline />
        <div className={classes.paper}>
          <form onSubmit={loginHandler} className={classes.form}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.formTitle}
            >
              Log in
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              required
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              margin="normal"
              required
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={clsx(classes.btn, classes.margin)}
            >
              Log In
            </Button>
            <Grid container>
                <Link href="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;
