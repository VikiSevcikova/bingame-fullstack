import { createTheme, makeStyles } from "@material-ui/core/styles";
import { grey, lightBlue } from "@material-ui/core/colors";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: lightBlue[50],
      light: lightBlue[50],
      dark: lightBlue[50],
    },
    secondary: {
      main: lightBlue[50],
    },
  },
  typography: {
    fontFamily: [
      'VT323',
      'monospace'
    ].join(','),
  },
});

export const useStyles = makeStyles((theme) => ({
  page: {
    flexDirection: 'column',
    minHeight: '100vh',
  },
  margin: {
    margin: theme.spacing(2, "auto"),
  },
  video: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%',
    zIndex: -1,
  },
  header: {
    "& .MuiAppBar-root": {
      backgroundColor: "#00b0ff94",
    },
  },
  footer: {
    backgroundColor: "#00b0ff94",
  },
  grow: {
    flexGrow: 1,
  },
  neonBtn: {
    margin: theme.spacing(3, "auto"),
    fontSize: "1.2rem",
    color: lightBlue[50],
    borderColor: "#4fc3f7",
    backdropFilter: 'blur(10px)',
    boxShadow:
      "0 0 7px #fff, 0 0 12px #03a9f4, 0 0 22px #03a9f4, inset 0 0 7px #03a9f4",
    animation: `$pulsate 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
    "&:hover": {
      color: lightBlue[50],
      borderColor: lightBlue[200],
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    color: lightBlue[700],
    borderColor: lightBlue[500],
    fontSize: "20px",
    "&:hover": {
      color: lightBlue[600],
      borderColor: lightBlue[400],
    },
  },
  "@keyframes pulsate": {
    "100%": {
      boxShadow:
        "0 0 10px #fff, 0 0 15px #03a9f4, 0 0 24px #03a9f4, inset 0 0 9px #03a9f4",
    },
    "0%": {
      boxShadow:
        "0 0 7px #fff, 0 0 12px #03a9f4, 0 0 22px #03a9f4, inset 0 0 7px #03a9f4",
    },
  },
  form: {
    backgroundColor: '#003c566e',
    backdropFilter: 'blur(10px)',
    border: "1px solid #4fc3f7",
    padding: theme.spacing(5),
    borderRadius: "15px",
    boxShadow:
      "0 0 7px #fff, 0 0 12px #03a9f4, 0 0 22px #03a9f4, inset 0 0 7px #03a9f4",
    animation: `$pulsate 1s ${theme.transitions.easing.easeInOut} infinite alternate`,

    "& .MuiTypography-h4": {
      textTransform: "uppercase",
    },
  },
}));
