import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';

import { registerUser } from '../actions'
import { connect } from 'react-redux';

import { useStyles } from '../hooks/styles'

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

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Post Here 2!</h1>
      <h3>Please Register Below:</h3>
      <form className={classes.form} onSubmit={registerPost} style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly', height: '200px', alignItems: 'center'}}>
      <TextField
        className={classes.textField}
        id="username-input"
        label="Username"
        type="username"
        name="username"
        value={user.credentials.username}
        onChange={handleChanges}
        InputProps={{className: classes.input}}
      />
      <TextField
        className={classes.textField}
        id="password-input"
        label="Password"
        type="password"
        name="password"
        value={user.credentials.password}
        onChange={handleChanges}
        InputProps={{className: classes.input}}
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