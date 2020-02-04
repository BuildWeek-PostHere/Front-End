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
        <Button variant="contained" color="secondary" type="submit">Post</Button>
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