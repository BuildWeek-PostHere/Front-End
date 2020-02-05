import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import image from "../img/favicon.ico";

import { connect } from 'react-redux';
import { getUserPosts, getPosts } from "../actions"

export const useStyles = makeStyles({
  anchors: {
    textDecoration: 'none',
    width: '140px'
  },
  anchorText: {
    color: 'white'
  },
  navbar: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start', 
    background: '#1A1A1B',
    borderBottom: '1px solid #343536',
    maxHeight: '50px'
  },
  image: {
    width: '50px',
    paddingLeft: '10px',
    paddingRight: '10px'
  }
});

function NavBar(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar  className={classes.navbar} position="static">
        <img className={classes.image} src={image} alt="Reddit logo" />
        <Link className={classes.anchors} to="/protected">
          <Tab value='1' className={classes.anchorText} label="Home"  />
        </Link>
        <Link className={classes.anchors} to="/login">
          <Tab value='2' className={classes.anchorText} label="Log In"  />
        </Link>
        <Link className={classes.anchors} to="/register">
          <Tab value='3' className={classes.anchorText} label="Register"  />
        </Link>
        <Link className={classes.anchors} to="/user" onClick={() => {props.getUserPosts(props.user_id); props.getPosts()}}>
          <Tab value='4' className={classes.anchorText} label="Your Page" />
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