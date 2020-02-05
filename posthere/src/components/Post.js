import React from "react";
import { Card, Button } from '@material-ui/core';
import { useStyles } from "../hooks/styles";

const Post = ({ post, deletePost }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.post}>
        <h1>{post.title}</h1>
        <p>{post.post_body}</p>
        <Button
        onClick={() => deletePost(post.id)}
        variant="contained"
        color="primary"
        >
          Delete!
        </Button>
      </Card>
    </>
  )
}

export default Post;