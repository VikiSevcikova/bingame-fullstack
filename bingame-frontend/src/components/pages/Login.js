import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from '../Theme';
import NavBar from '../NavBar';
import { Link } from "react-router-dom";


function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (e) => {}
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

    <form onSubmit={loginHandler} className={classes.root}>
        <Typography variant="h4" component="h2" gutterBottom style={{textTransform: 'uppercase'}}>
           Log in
        </Typography>
        {error && <span >{error}</span>}
        <TextField className={classes.input} fullWidth id="email" label="Email" variant="outlined" type="email"/>

        <TextField className={classes.input} fullWidth id="password" label="Password" variant="outlined" type="password"/>

        <Button className={classes.btn} variant="outlined">Log in</Button>
        <p>
          Don't have account yet?
          <Link to="/register" tabIndex={4}>
            Register
          </Link>
        </p>
      </form>

      </Grid>
    </>
  );
}

export default Login;
