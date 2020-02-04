import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { fetchCharacter } from '../actions'
import { connect } from 'react-redux';

const AddPost = (props) => {
  const [term, setTerm] = useState('');

  const handleChanges = (e) => {
    setTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchCharacter(term);
    setTerm('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          color="secondary"
          name="search"
          id="filled-basic" 
          label="Search a character"
          value={term}
          onChange={handleChanges}
        />
        <Button variant="contained" color="primary" type="submit">Submit!</Button>
      </form>
      <form className="post" onSubmit={handleSubmit}>
        <TextField 
        outlined color="secondary"
        name='post'
        id='createPost'
        label="Create or Paste a post!"
        value=""
        placeholder="This is where you place or paste your post to begin the super awesome process"
        onChange={handleChanges}
        />
        <Button variant="contained" color="primary" type="submit" >Post</Button>
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    activity: state.activity,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchCharacter }
)(CharacterSearchForm);