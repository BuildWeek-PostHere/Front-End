import React, { useState } from "react";
import { Card, Button } from '@material-ui/core';
import { container, form, textField, darkinput, buttonBox, postStyle } from "../hooks/styles";
import EditPost from "./EditPost";

const Post = ({ post, deletePost, getPosts, getUserPosts, user_id }) => {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <Card style={postStyle}>
        {!editing &&
          <>
            <h1>{post.title}</h1>
            <p>{post.post_body}</p>
          </>
        }
        {editing &&
          <>
            <EditPost editing={editing} setEditing={setEditing} post={post} user_id={user_id}/>
          </>
        }
        <div style={buttonBox}>
          {!editing && deletePost &&
          <>
            <Button onClick={() => {setEditing(true);}}
              variant="contained"
              color="secondary"
            >
              Edit!
            </Button>
          </>
          }
          {deletePost && 
            <>
              <Button onClick={() => {deletePost(post.id, user_id)}}
                variant="contained"
                color="primary"
              >
                Delete!
              </Button>
            </>
          }
        </div>
      </Card>
    </>
  )
}

export default Post;