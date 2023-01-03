import React from "react";

function PostDetail(props) {
  const { post, onDeleteClick } = props;
  return (
    <React.Fragment>
      <h2>Post Detail</h2>
      <hr />
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p>
        <em>Time Submitted: {post.timeSubmitted}</em>
      </p>
      <hr />
      <button onClick={props.onEditClick}>Edit Ticket</button>
      <button onClick={() => onDeleteClick(post.id)}>Delete Ticket</button>
      <br />
    </React.Fragment>
  );
}

export default PostDetail;
