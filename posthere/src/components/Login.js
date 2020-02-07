import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { postLogin, getPosts, getUserPosts } from '../actions'
import { connect } from 'react-redux';

import { container, form, textField, darkinput } from "../hooks/styles";
import { wait } from "../hooks/wait";

// Login component

const Login = (props) => {
const [ login, setLogin ] = useState({
    credentials: {
      username: '',
      password: ''
    },
    history: props.history
  });

  const handleChanges = e => {
    setLogin({
      credentials: {
        ...login.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const loginPost = async(e) => {
    e.preventDefault();
    console.log(login);
    props.postLogin(login);

    await wait();

    await props.getPosts();
    await props.getUserPosts();

    props.history.push('/protected');
  };

  return (
    <div style={container}>
      <h1>Post Here 2!</h1>
      <h3>Please log in below:</h3>
      <form style={form} onSubmit={loginPost}>
      <TextField
        style={textField}
        variant="filled"
        color="secondary"
        id="username-input"
        label="Username"
        type="username"
        name="username"
        value={login.credentials.username}
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
        value={login.credentials.password}
        onChange={handleChanges}
        InputLabelProps={{style: darkinput}}
        inputProps={{style: darkinput}}
      />
        <Button
        variant="contained"
        color="primary"
        type="submit"
        >
          Log in
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
  { postLogin, getPosts, getUserPosts }
)(Login);