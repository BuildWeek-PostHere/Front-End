import React from "react";
import { connect } from 'react-redux';
import { useStyles } from '../hooks/styles';
import Post from "./Post";
import { deletePost, getPosts, getUserPosts } from "../actions"

const Posts = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        {props.posts && props.posts.map(post => (
          <Post user_id={props.user_id} deletePost={props.deletePost} getPosts={props.getPosts} getUserPosts={props.getUserPosts} post={post} key={post.id} />
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
    user_id: state.user.user_id
  };
};

export default connect(
  mapStateToProps,
  { deletePost, getPosts, getUserPosts }
)(Posts);