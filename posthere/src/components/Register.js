import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { registerUser } from '../actions'
import { connect } from 'react-redux';

import { container, form, textField, darkinput, buttonBox, post } from "../hooks/styles";

// Component to register a new user

const Register = (props) => {
const [ user, setUser ] = useState({
    credentials: {
      username: '',
      password: ''
    },
  });

  const handleChanges = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const registerPost = e => {
    e.preventDefault();
    console.log(user);
    props.registerUser(user);
    props.history.push('/login');
  };

  return (
    <div style={container}>
      <h1>Post Here 2!</h1>
      <h3>Please Register Below:</h3>
      <form style={form} onSubmit={registerPost}>
      <TextField
        style={textField}
        variant="filled"
        color="secondary"
        id="username-input"
        label="Username"
        type="username"
        name="username"
        value={user.credentials.username}
        onChange={handleChanges}
        InputLabelProps={{style: darkinput}}
        inputProps={{style: darkinput}}
      />
      <TextField
        style={textField}
        variant="filled"
        color="secondary"
        id="password-input"
        label="Password"
        type="password"
        name="password"
        value={user.credentials.password}
        onChange={handleChanges}
        InputLabelProps={{style: darkinput}}
        inputProps={{style: darkinput}}
      />
        <Button
        variant="contained"
        color="secondary"
        type="submit"
        >
          Register
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);