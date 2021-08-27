import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Container, CssBaseline } from "@material-ui/core";
import clsx from "clsx";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "../../features/User/UserSlice";
import { hideAlert, showAlert } from "../../features/Alert/AlertSlice";

function ForgotPassword({history}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user.loggedIn) history.push("/menu");
  }, [history]);

  const sendMail = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/forgotpassword",
        JSON.stringify({ email }),
        config
      );
      dispatch(showAlert({type: 'success', message: data.data, show: true}));
      //hide message after 5s
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);
    } catch (error) {
      dispatch(showAlert({type: 'error', message: error.response?.data.error, show: true}));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);
    } finally {
      setEmail("");
    }
  };
  return (
    <>
      <Container component="main" maxWidth="sm" className={classes.grow}>
        <CssBaseline />
        <div className={classes.paper}>
          <form onSubmit={sendMail} className={classes.form}>
            <Typography variant="h5" gutterBottom className={classes.formTitle}>
              Forgot your password?
            </Typography>

            <Typography variant="body2">
              If you've forgotten your password, enter and submit your email
              address below. We'll email you a link to a page where you can
              easily create a new password.
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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={clsx(classes.btn, classes.margin)}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default ForgotPassword;
