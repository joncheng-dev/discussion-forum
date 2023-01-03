import React from "react";

function Post(props) {
  const divStyle = {
    color: "white",
    backgroundColor: "#3A3B3C",
    paddingLeft: 10,
  };

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
      <div onClick={() => props.whenPostClicked(props.id)} style={divStyle}>
        <hr />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>
          <em>{timeSince(props.timeSubmitted)}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default Post;
