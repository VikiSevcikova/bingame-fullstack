import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/MainPage.js';
import NavBar from './components/NavBar';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={Login}/>
            <Route exac path="/register" component={Register}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
