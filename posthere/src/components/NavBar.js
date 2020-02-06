import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import image from "../img/favicon.ico";

import { connect } from 'react-redux';
import { getUserPosts, getPosts } from "../actions"

const anchors = {
    textDecoration: 'none',
    width: '140px'
  }
const anchorText = {
    color: 'white'
  }
const navbar = {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start', 
    background: '#1A1A1B',
    borderBottom: '1px solid #343536',
    maxHeight: '50px'
  }
const imageStyle = {
    width: '50px',
    paddingLeft: '10px',
    paddingRight: '10px'
  }

function NavBar(props) {
  return (
    <div>
      <AppBar style={navbar} position="static">
        <img style={imageStyle} src={image} alt="Reddit logo" />
        <Link style={anchors} to="/protected" onClick={() => {props.getUserPosts(props.user_id); props.getPosts()}}>
          <Tab value='1' style={anchorText} label="Home"  />
        </Link>
        <Link style={anchors} to="/user" onClick={() => {props.getUserPosts(props.user_id); props.getPosts()}}>
          <Tab value='2' style={anchorText} label="Your Page" />
        </Link>
        <Link style={anchors} to="/login">
          <Tab value='3' style={anchorText} label="Log In"  />
        </Link>
        <Link style={anchors} to="/register">
          <Tab value='4' style={anchorText} label="Register"  />
        </Link>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user_id: state.user.user_id
  };
};

export default connect(
  mapStateToProps,
  { getUserPosts, getPosts }
)(NavBar);