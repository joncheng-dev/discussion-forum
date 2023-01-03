import React from "react";

function PostDetail(props) {
  const { post, onDeleteClick } = props;

  function timeSince(date) {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  return (
    <React.Fragment>
      <h2>Post Detail</h2>
      <hr />
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p>
        <em>Post Created: {timeSince(post.timeSubmitted)}</em>
      </p>
      <hr />
      <button onClick={props.onEditClick}>Edit Ticket</button>
      <button onClick={() => onDeleteClick(post.id)}>Delete Ticket</button>
      <br />
    </React.Fragment>
  );
}

export default PostDetail;
