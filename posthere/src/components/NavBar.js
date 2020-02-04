import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

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

  }
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar  className={classes.navbar} position="static">
        <Link className={classes.anchors} to="/protected">
          <Tab value='1' className={classes.anchorText} label="Home!"  />
        </Link>
        <Link className={classes.anchors} to="/login">
          <Tab value='2' className={classes.anchorText} label="Log In!"  />
        </Link>
        <Link className={classes.anchors} to="/register">
          <Tab value='3' className={classes.anchorText} label="Register!"  />
        </Link>
      </AppBar>
    </div>
  );
}