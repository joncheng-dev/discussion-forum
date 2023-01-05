import React from "react";
import styled from "styled-components";
import timeSince from "./time-since";

function Post(props) {
  const PostStyle = styled.div`
    color: white;
    background-color: #3a3b3c;

    .post-content {
      display: flex;
      flex-wrap: wrap;
    }

    // Upvote, score, downvote
    .post-content > *:nth-child(1) {
      flex: 1;
      background-color: lightblue;
    }

    // Picture
    .post-content > *:nth-child(2) {
      flex: 3;
      background-color: blue;
    }

    // Title, Link
    // Post Author, Time Posted Ago
    .post-content > *:nth-child(3) {
      flex: 17;
      justify-content: flex-start;
      background-color: purple;
    }
  `;

  return (
    <React.Fragment>
      <PostStyle>
        <div onClick={() => props.whenPostClicked(props.id)} className="post-content">
          <div className="left">
            <p>Left</p>
          </div>
          <div className="mid">
            <p>Mid</p>
          </div>
          <div className="right">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <p>
              <em>{timeSince(props.timeSubmitted)}</em>
            </p>
          </div>
        </div>
      </PostStyle>
    </React.Fragment>
  );
}

export default Post;
