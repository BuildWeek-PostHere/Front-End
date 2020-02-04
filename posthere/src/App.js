import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar"
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <PrivateRoute path="/protected" component={Dashboard}/>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
=======
import './App.css';

function App() {
  return (
    null
>>>>>>> ca3a249ae67693aeded04a2d33647e1277da8395
  );
}

export default App;
