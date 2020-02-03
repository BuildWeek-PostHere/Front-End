import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute path="/protected" />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
