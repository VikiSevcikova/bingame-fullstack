import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Container, CssBaseline } from "@material-ui/core";
import clsx from "clsx";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { hideAlert, showAlert } from "../../features/Alert/AlertSlice";
import { logIn } from "../../features/User/UserSlice";
import { setCurrentUser } from "../../utils/utils";

function Register({history}) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("authToken")) history.push("/menu");
  },[history]);

  const registerHandler = async (e) => {
    e.preventDefault();

    // const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')
    if(password !== confirmedPassword){
      setPassword("");
      setConfirmedPassword("");
      dispatch(showAlert({type: 'warning', message: 'Passwords do not match!', show: true}));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Basic ' + token,
      },
      auth: {
        email: email,
        password: password
      }
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/register",
        JSON.stringify({username, email, password }),
        config
      );

      history.push("/menu");
      console.log(data);

      localStorage.setItem("authToken", data.token);
      setCurrentUser(data.user);
      dispatch(logIn());

      dispatch(showAlert({type: 'success', message: 'You are logged in!', show: true}));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);

    } catch (error) {
      dispatch(showAlert({type: 'error', message: error.response?.data.error, show: true}));
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
            <TextField
              className={classes.input}
              fullWidth
              margin="normal"
              required
              id="username"
              label="Username"
              variant="outlined"
              type="text"
              onChange={(e) => setUsername(e.target.value)}

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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setConfirmedPassword(e.target.value)}
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
