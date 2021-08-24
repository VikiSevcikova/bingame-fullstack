import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { selectUser } from "./features/User/UserSlice";

function App() {
  const classes = useStyles();
  const user = useSelector(selectUser);
console.log(user)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Grid container className={classes.page}>
          <AlertMessage />
          <Header />
          <video autoPlay muted loop className={classes.video}>
            <source src="video/bg.mp4" type="video/mp4" />
          </video>
          <Switch>
            <Route exact path="/" component={PublicHomePage} />
            <Route exact path="/login" component={Login} />
            <Route exac path="/signup" component={Register} />
            <Route exac path="/forgotpassword" component={ForgotPassword} />

            {/* <Route exact path="/">
              {user.loggedIn ? <Redirect to="/menu" /> : <PublicHomePage />}
            </Route>

            <Route exact path="/login">
              {user.loggedIn ? <Redirect to="/menu" /> : <Login />}
            </Route>

            <Route exact path="/signup">
              {user.loggedIn ? <Redirect to="/menu" /> : <Register />}
            </Route>

            <Route exact path="/forgetpassword">
              {user.loggedIn ? <Redirect to="/menu" /> : <ForgotPassword />}
            </Route>

            <Route exact path="/menu">
              {!user.loggedIn ? <Redirect to="/" /> : <PrivateHomePage />}
            </Route> */}
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
