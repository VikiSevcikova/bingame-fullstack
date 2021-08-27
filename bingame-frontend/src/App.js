import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuPageRoute from "./components/routes/MenuPageRoute";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ThemeProvider } from "@material-ui/core/styles";
import { useStyles, darkTheme } from "./components/Theme";
import ForgotPassword from "./components/pages/ForgotPassword";
import AlertMessage from "./components/AlertMessage";
import NotFound from "./components/pages/NotFound";
import PrivateHomePage from "./components/pages/PrivateHomePage";
import PublicHomePage from "./components/pages/PublicHomePage";
import ResetPassword from "./components/pages/ResetPassword";

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Grid container className={classes.page}>
          <AlertMessage />
          <Header />
          <video autoPlay muted loop className={classes.video}>
            <source src="../../video/bg.mp4" type="video/mp4" />
          </video>
          <Switch>
            <Route exact path="/" component={PublicHomePage} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={Register} />

            <Route exact path="/forgotpassword" component={ForgotPassword} />

            <Route exact path="/resetpassword/:resetToken" component={ResetPassword} />

            <MenuPageRoute exact path="/menu" component={PrivateHomePage} />

            <Route component={NotFound} />
            
          </Switch>
          <Footer />
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
