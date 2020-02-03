import React from 'react';
import { useStyles } from '../hooks/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

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