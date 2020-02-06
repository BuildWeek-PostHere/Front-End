import React from "react";
import Loader from "react-loader-spinner"
import Posts from "./Posts"
import { connect } from 'react-redux';
import AddPost from "./AddPost";
import { Button } from "@material-ui/core"

import { getPosts, addPost } from "../actions"
import { container } from '../hooks/styles'

const Dashboard = (props) => {
  return (
    <>
      <div style={container}>
        <AddPost get={props.addPost} />
        {!props.isLoading && <Posts posts={props.posts}/>}
        {props.isLoading && <Loader type="Circles" color="#FF7127" height={80} width={80}/>}
        {!props.posts && !props.isLoading && <Button variant="contained" color="secondary" onClick={() => props.getPosts()}>Get Posts!</Button>}
      </div>
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
  { getPosts, addPost }
)(Dashboard);