import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar"
import Register from "./components/Register";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <PrivateRoute path="/protected" component={Dashboard}/>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={User} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
