import React from "react";
import { Card } from '@material-ui/core';
import { useStyles } from "../hooks/styles";

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.post}>
        <h1>{post.title}</h1>
        <p>{post.post_body}</p>
      </Card>
    </>
  )
}

export default Post;