import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Theme";
import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { hideAlert, showAlert } from "../../features/Alert/AlertSlice";
import { selectUser } from "../../features/User/UserSlice";
import { useSelector, useDispatch } from "react-redux";

function PrivateHomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const [users, setUsers] = useState('');

  const getUsers = async (e) => {
    e.preventDefault();

    const token = Buffer.from(`${user.data.email}:${user.data.password}`, 'utf8').toString('base64')

    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Basic ' + token,
      }
    };

    try {
      const { data } = await axios.get(
        "http://localhost:5000/users/all",
        config
      );

      setUsers(data.users);

    } catch (error) {
      dispatch(showAlert({type: 'error', message: error.response?.data.error, show: true}));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 5000);
    }

  }
  return (
    <>
      <Grid item md={10} lg={8} container alignItems="center" className={classes.grow} style={{margin:"auto"}}>
        <CssBaseline />
        <Grid item xs={12} md={6} style={{padding:"2rem"}}>
            <Typography variant="h3">Let's learn together how to convert decimal number to binary.</Typography>
            <Typography variant="h5">
              Computers use the binary number system to manipulate and store all of their data including numbers, words, videos, graphics, and music.
            </Typography>
          </Grid>
        <Button onClick={getUsers}>get users</Button>
        <p>{users}</p>
      </Grid>
    </>
  );
}

export default PrivateHomePage;
