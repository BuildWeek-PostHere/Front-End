import React from "react";
import { connect } from 'react-redux';
import { useStyles } from '../hooks/styles';
import Post from "./Post";

import { deletePost } from "../actions"

const Posts = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        {props.posts && props.posts.map(post => (
          <Post deletePost={props.deletePost} post={post} key={post.id} />
        ))}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { deletePost }
)(Posts);