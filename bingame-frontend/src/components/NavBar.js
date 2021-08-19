import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { cyan } from '@material-ui/core/colors';
import { useStyles } from '../components/Theme';
import { Link } from "react-router-dom";

const navTheme = createTheme({
    palette: {
      primary: {
        main: cyan[700],
      },
    },
  });

export default function NavBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={navTheme}>
    <div className={classes.navBar}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BinGame
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}
