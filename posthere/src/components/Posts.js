import React from "react";
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';

import Post from "./Post";

const Posts = (props) => {
  return (
    <>
      <Container>
        {props.posts && props.posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error,
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  {}
)(Posts);