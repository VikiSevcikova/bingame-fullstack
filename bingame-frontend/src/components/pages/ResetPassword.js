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
import { useParams } from "react-router-dom";

function ResetPassword({history}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const {resetToken} = useParams();
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (user.loggedIn) history.push("/menu");
  }, [history]);

  const resetPassword = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const { data } = await axios.put(
        `http://localhost:5000/auth/resetpassword/${resetToken}`,
        JSON.stringify({ newPassword }),
        config
      );
      history.push("/login");
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
      setNewPassword("");
    }
  };
  return (
    <>
      <Container component="main" maxWidth="sm" className={classes.grow}>
        <CssBaseline />
        <div className={classes.paper}>
          <form onSubmit={resetPassword} className={classes.form}>
            <Typography variant="h5" gutterBottom className={classes.formTitle}>
              Please type your new password
            </Typography>

            <TextField
              fullWidth
              margin="normal"
              required
              id="newPassword"
              label="New Password"
              variant="outlined"
              type="password"
              autoFocus
              value={newPassword}
              onChange={(e)=>setNewPassword(e.target.value)}
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

export default ResetPassword;
