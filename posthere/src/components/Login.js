import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';

import { postLogin } from '../actions'
import { connect } from 'react-redux';

import { useStyles } from '../hooks/styles'

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

  const loginPost = e => {
    e.preventDefault();
    console.log(login);
    props.postLogin(login);
    props.history.push('/protected');
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Post Here 2!</h1>
      <h3>Please log in below:</h3>
      <form className={classes.form} onSubmit={loginPost} style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly', height: '200px', alignItems: 'center'}}>
      <TextField
        className={classes.textField}
        variant="filled"
        color="secondary"
        id="username-input"
        label="Username"
        type="username"
        name="username"
        value={login.credentials.username}
        onChange={handleChanges}
        InputLabelProps={{className: classes.darkinput}}
        inputProps={{className: classes.darkinput}}
      />
      <TextField
        className={classes.textField}
        variant="filled"
        color="secondary"
        id="password-input"
        label="Password"
        type="password"
        name="password"
        value={login.credentials.password}
        onChange={handleChanges}
        InputLabelProps={{className: classes.darkinput}}
        inputProps={{className: classes.darkinput}}
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
  { postLogin }
)(Login);