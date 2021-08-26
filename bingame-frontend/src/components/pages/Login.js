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
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, showAlert } from "../../features/Alert/AlertSlice";
import { selectUser, logIn } from "../../features/User/UserSlice";
import { setCurrentUser } from "../../utils/utils";

function Login({history}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    //if in the store loggedIn is not null so the user is logged in 
    if (user.loggedIn) history.push("/menu");
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/login",
        JSON.stringify({ email, password }),
        config
      );

      //based on remember me checkbox save the authToken
      //save to local if the user want to be remembered so after the window is closed we still have info that user is authentificated
      if(rememberMe){
        localStorage.setItem("authToken", data.token);
      }else{
        sessionStorage.setItem("authToken", data.token);
      }
      //save data about user to local storage
      setCurrentUser(data.user);
      //save data to the store
      dispatch(logIn());
      //show message that the user was logged in
      dispatch(showAlert({type: 'success', message: 'You are logged in!', show: true}));
      //hide message after 5s
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);
      //redirect to private main page
      history.push("/menu");
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
              onChange={()=>setRememberMe(!rememberMe)}
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
