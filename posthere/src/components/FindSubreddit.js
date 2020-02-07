import React from "react";
import { Button } from "@material-ui/core";
import { findSubreddit } from "../actions";
import { connect } from 'react-redux';

const FindSubreddit = (props) => {
  return (
    <>
      <Button variant="contained" color="secondary" onClick={() => props.findSubreddit(props.post)} >Find Subreddit!</Button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error,
    user_id: state.user.user_id
  };
};

export default connect(
  mapStateToProps,
  { findSubreddit }
)(FindSubreddit);