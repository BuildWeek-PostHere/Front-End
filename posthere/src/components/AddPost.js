import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getPosts, getUserPosts } from '../actions'

import { useStyles } from '../hooks/styles'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term.post);
    props.getPosts();
    props.getUserPosts(props.user_id);
    props.get(term.post);
    props.getPosts();
    props.getUserPosts(props.user_id);
    setTerm(initialTerm);
  }

  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <form className={classes.post} onSubmit={handleSubmit} style={{minHeight: '200px', justifyContent: 'space-evenly'}}>
          <TextField 
            className={classes.textField}
            variant="filled"
            color="secondary"
            name='title'
            id='title'
            label="Create a Post Title!"
            value={term.title}
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
            label="Create or Paste a post!"
            value={term.post_body}
            placeholder="This is where you place or paste your post to begin the super awesome process"
            onChange={handleChanges}
            InputLabelProps={{className: classes.darkinput}}
            inputProps={{className: classes.darkinput}}
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