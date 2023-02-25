import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      <h2>Post List</h2>
      {Object.values(props.postList).map((post) => (
        <Post
          whenUpvoteClicked={props.onUpvoteClick}
          whenDownvoteClicked={props.onDownvoteClick}
          whenPostClicked={props.onPostSelection}
          title={post.title}
          text={post.text}
          timeSubmitted={post.timeSubmitted}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          score={post.score}
          formattedWaitTime={post.formattedWaitTime}
          id={post.id}
          key={post.id}
          imageUrl={post.imageUrl}
        />
      ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onUpvoteClick: PropTypes.func,
  onDownvoteClick: PropTypes.func,
  onPostSelection: PropTypes.func,
};

export default PostList;
