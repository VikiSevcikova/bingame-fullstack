import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { cyan,yellow } from '@material-ui/core/colors';

const btnTheme = createTheme({
    palette: {
      primary: {
        main: cyan[800],
        '&$hover':{
          backgroundColor: yellow[600],
          color: yellow[600],
        }
      },
      secondary: {
        main: cyan[700],
      },
    },
});   

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1, 'auto'),
      color: cyan[700], 
      borderColor:  cyan[700],
    '&:hover': {
      color:  yellow[600],
      borderColor:  yellow[600],
    }
  },
}));

export default function MainButton({title}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={btnTheme}>
    <div className={classes.root}>
      <Button fullWidth variant="outlined" color="primary">{title}</Button>
    </div>
    </ThemeProvider>
  );
}
