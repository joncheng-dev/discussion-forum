import React from "react";
import Post from "./Post";

function PostList(props) {
  return (
    <React.Fragment>
      <h2>Post List</h2>
      {props.postList.map((post) => (
        <Post title={post.title} text={post.text} />
      ))}
    </React.Fragment>
  );
}

export default PostList;
