import React from "react";
import Post from "./Post";

function PostList(props) {
  return (
    <React.Fragment>
      <h2>Post List</h2>
      {props.postList.map((post) => (
        <Post whenPostClicked={props.onPostSelection} title={post.title} text={post.text} id={post.id} key={post.id} />
      ))}
    </React.Fragment>
  );
}

export default PostList;
