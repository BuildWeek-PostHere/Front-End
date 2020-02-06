import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';
import { getPosts, getUserPosts, editPost } from '../actions'
import { connect } from 'react-redux';

import { useStyles } from "../hooks/styles";
import { wait } from "../hooks/wait";

const EditPost = (props) => {
  const initialEditedTerm = {post: { title: props.post.title, best_place: 'NA', post_body: props.post.post_body, user_id: props.user_id }, id: props.post.id}
  const [newTerm, setNewTerm] = useState(initialEditedTerm);
  const classes = useStyles();

  const handleChanges = (e) => {
    setNewTerm({
      ...newTerm,
      post: {
        ...newTerm.post,
        [e.target.name]: e.target.value
      }
    });
    console.log(newTerm)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(newTerm.post);
    props.editPost(newTerm);

    await wait();

    await props.getPosts();
    await props.getUserPosts(props.user_id);

    props.setEditing(false);
  }

  return (
    <>
      {props.editing &&
        <>
          <form className={classes.container} onSubmit={handleSubmit} style={{minHeight: '200px', justifyContent: 'space-evenly'}}>
            <TextField 
              className={classes.textField}
              variant="filled"
              color="secondary"
              name='title'
              id='title'
              label="Edit a Post Title!"
              value={newTerm.post.title}
              onChange={handleChanges}
              InputLabelProps={{className: classes.darkinput}}
              inputProps={{className: classes.darkinput}}
            />
            <TextField 
              className={classes.textField}
              variant="filled"
              color="secondary"
              name='post_body'
              id='post_body'
              label="Edit or Paste a post!"
              value={newTerm.post.post_body}
              placeholder="This is where you place or paste your post to begin the super awesome process"
              onChange={handleChanges}
              InputLabelProps={{className: classes.darkinput}}
              inputProps={{className: classes.darkinput}}
            />
            <Button variant="contained" color="secondary" type="submit" >Post Edit!</Button>
          </form>
        </>
      }
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
  { getPosts, getUserPosts, editPost }
)(EditPost);