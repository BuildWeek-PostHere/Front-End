import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getPosts, getUserPosts } from '../actions'

import { container, form, textField, darkinput, buttonBox, postStyle } from "../hooks/styles";
import { wait } from "../hooks/wait";

const AddPost = (props) => {
  const initialTerm = {post: { title: '', best_place: 'NA', post_body: '', user_id: props.user_id }}
  const [term, setTerm] = useState(initialTerm);

  const handleChanges = (e) => {
    setTerm({
      post: {
        ...term.post,
        [e.target.name]: e.target.value
      }
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(term.post);
    props.get(term.post);

    await wait();

    await props.getPosts();
    await props.getUserPosts(props.user_id);

    setTerm(initialTerm);
  }

  return (
    <>
      <div style={container}>
        <form style={postStyle} onSubmit={handleSubmit}>
          <TextField 
            style={textField}
            variant="filled"
            color="secondary"
            name='title'
            id='title'
            label="Create a Post Title!"
            value={term.post.title}
            onChange={handleChanges}
            InputLabelProps={{style: darkinput}}
            inputProps={{style: darkinput}}
          />
          <TextField 
            style={textField}
            variant="filled"
            color="secondary"
            name='post_body'
            id='post_body'
            label="Create or Paste a post!"
            value={term.post.post_body}
            placeholder="This is where you place or paste your post to begin the super awesome process"
            onChange={handleChanges}
            InputLabelProps={{style: darkinput}}
            inputProps={{style: darkinput}}
          />
          <Button variant="contained" color="secondary" type="submit" >Post</Button>
        </form>
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
  { getPosts, getUserPosts }
)(AddPost);