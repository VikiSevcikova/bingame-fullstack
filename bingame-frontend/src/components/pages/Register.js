import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from '../Theme';
import NavBar from '../NavBar';
import { Link } from "react-router-dom";


function Register() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {}

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
   
    <form onSubmit={registerHandler} className={classes.root}>
        <Typography variant="h4" component="h2" gutterBottom style={{textTransform: 'uppercase'}}>
           Register
        </Typography>
        {error && <span className="error">{error}</span>}
        <TextField className={classes.input} fullWidth id="username" label="Username" variant="outlined" type="text"/>
        <TextField className={classes.input} fullWidth id="email" label="Email" variant="outlined" type="email"/>
        <TextField className={classes.input} fullWidth id="password" label="Password" variant="outlined" type="password"/>
        <TextField className={classes.input} fullWidth id="confirmedPassword" label="Confirmed Password" variant="outlined" type="password"/>

        <Button className={classes.btn} variant="outlined">Register</Button>
        <p >
          Already have an account?
          <Link  to="/login" tabIndex={4}>
            Log in
          </Link>
        </p>
      </form>

      </Grid>
    </>
  );
}

export default Register;
