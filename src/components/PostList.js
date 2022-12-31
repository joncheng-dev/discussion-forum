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
  ];

  const divStyle = {
    color: "#D7DADC",
    backgroundColor: "#242526",
    padding: "10px",
  };

  return (
    <React.Fragment>
      <div style={divStyle}>
        <h2>Post List</h2>
        {postList.map((post) => (
          <Post title={post.title} text={post.text} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default PostList;
