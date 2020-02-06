// import React from "react";
// import { Button } from '@material-ui/core';
// import { connect } from 'react-redux';

// import { deletePost, getPosts, getUserPosts } from '../actions'

// const DeletePost = (props) => {
//   return (
//     <>
//       <Button
//       onClick={() => {props.deletePost(props.id); props.getPosts; props.getUserPosts(props.user_id)}}
//       variant="contained"
//       color="primary"
//       >
//         Delete!
//       </Button>
//     </>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     isLoading: state.isLoading,
//     activity: state.activity,
//     error: state.error,
//     user_id: state.user.user_id
//   };
// };

// export default connect(
//   mapStateToProps,
//   { deletePost, getPosts, getUserPosts }
// )(DeletePost);