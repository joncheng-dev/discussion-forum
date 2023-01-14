import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      <h2>Post List</h2>
      {Object.values(props.postList).map((post) => (
        <Post
          whenPostClicked={props.onPostSelection}
          title={post.title}
          text={post.text}
          timeSubmitted={post.timeSubmitted}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          score={post.score}
          id={post.id}
          key={post.id}
        />
      ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
};

export default PostList;
