import React from "react";
import Loader from "react-loader-spinner"
import Posts from "./Posts";
import { connect } from 'react-redux';
import AddPost from "./AddPost";

import { deletePost, getUserPosts, addPost, editPost } from "../actions"
import { container, form, textField, darkinput } from "../hooks/styles";

// User Page component

const User = (props) => {
  return (
    <>
      <div style={container}>
        <AddPost get={props.addPost} />
        {props.subreddit && <h2>Try posting to r/{props.subreddit}!</h2>}
        {!props.isLoading && <Posts runEdit={props.editPost} deletePost={props.deletePost} posts={props.posts}/>}
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
    posts: state.user.posts,
    subreddit: state.subreddit
  };
};

export default connect(
  mapStateToProps,
  { deletePost, getUserPosts, addPost, editPost }
)(User);