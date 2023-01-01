import React from "react";
import Post from "./Post";

function PostList() {
  const postList = [
    {
      title: "Testing Post 1",
      text: "Post 1 text here",
    },
    {
      title: "Testing Post 2",
      text: "Post 2 text here",
    },
    {
      title: "Testing Post 3",
      text: "Post 3 text here",
    },
    {
      title: "Testing Post 4",
      text: "Post 4 text here",
    },
  ];

  return (
    <React.Fragment>
      <h2>Post List</h2>
      {postList.map((post) => (
        <Post title={post.title} text={post.text} />
      ))}
    </React.Fragment>
  );
}

export default PostList;
