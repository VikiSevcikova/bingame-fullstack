import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { cyan, yellow } from '@material-ui/core/colors'; 

export const useStyles = makeStyles((theme) => ({
    navBar: {
        flexGrow: 1,
      },
  menuButton: {
    marginRight: theme.spacing(2),
    },
  title: {
    flexGrow: 1,
    },    
  neonBtn: {
      margin: theme.spacing(3, 'auto'),
      fontSize: '1.2rem',
      color: cyan[700], 
      borderColor:  cyan[50],
      boxShadow: "0 0 7px #fff, 0 0 12px #00bcd4, 0 0 22px #00bcd4, inset 0 0 7px #00bcd4",
      animation: `$pulsate 1.2s ${theme.transitions.easing.easeInOut} infinite alternate`,
      '&:hover': {
        color: cyan[600], 
        borderColor:  cyan[200],
      }

  },
  btn: {
      margin: theme.spacing(3, 'auto'),
      color: cyan[700], 
      borderColor:  cyan[700],
      '&:hover': {
        color: cyan[600], 
        borderColor:  cyan[600],
      }

  },
  "@keyframes pulsate": {
    "100%": {
        boxShadow: "0 0 9px #fff, 0 0 15px #00bcd4, 0 0 25px #00bcd4, inset 0 0 7px #00bcd4",
    },
    "0%": {
        boxShadow: "0 0 7px #fff, 0 0 12px #00bcd4, 0 0 22px #00bcd4, inset 0 0 7px #00bcd4",
    }
  },
  root:{
      '& .MuiTextField-root': {
        margin: theme.spacing(1, 'auto'),
        color: cyan[50]
    }
  }

}));