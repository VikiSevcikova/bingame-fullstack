import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/pages/MainPage.js";
import NavBar from "./components/NavBar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "./components/Theme";
import ForgotPassword from "./components/pages/ForgotPassword";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={Login} />
            <Route exac path="/signup" component={Register} />
            <Route exac path="/forgotpassword" component={ForgotPassword} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
