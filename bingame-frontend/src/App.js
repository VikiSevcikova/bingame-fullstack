import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/pages/MainPage.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ThemeProvider } from "@material-ui/core/styles";
import { useStyles, darkTheme } from "./components/Theme";
import ForgotPassword from "./components/pages/ForgotPassword";

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className={classes.page}>
          <Header />
          <video autoPlay muted loop className={classes.video}>
            <source src="video/bg.mp4" type="video/mp4" />
          </video>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={Login} />
            <Route exac path="/signup" component={Register} />
            <Route exac path="/forgotpassword" component={ForgotPassword} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
