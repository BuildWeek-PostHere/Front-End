import React from "react";
import Loader from "react-loader-spinner"
import Posts from "./Posts";
import { connect } from 'react-redux';
import AddPost from "./AddPost";

import { getUserPosts, addPost } from "../actions"
import { useStyles } from "../hooks/styles";

const User = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <AddPost get={props.addPost} />
        {!props.isLoading && <Posts posts={props.posts}/>}
        {props.isLoading && <Loader type="Circles" color="#FF7127" height={80} width={80}/>}
        {!props.posts && !props.isLoading && <h1>Nothing posted yet! Try making a post?</h1>}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error,
    posts: state.user.posts
  };
};

export default connect(
  mapStateToProps,
  { getUserPosts, addPost }
)(User);