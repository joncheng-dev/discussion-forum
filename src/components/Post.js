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
      flex: 1 1 5%;
      background-color: lightblue;
    }

    // Picture
    .post-content > *:nth-child(2) {
      flex: 1 1 15%;
      background-color: blue;
    }

    // Title, Link
    // Post Author, Time Posted Ago
    .post-content > *:nth-child(3) {
      flex: 1 1 80%;
      background-color: purple;
    }
  `;

  return (
    <React.Fragment>
      <PostStyle>
        <div onClick={() => props.whenPostClicked(props.id)} className="post-content">
          <hr />
          <div className="left">
            <p>V</p>
          </div>
          <div className="mid">
            <p>I</p>
          </div>
          <div className="right">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <p>
              <em>{timeSince(props.timeSubmitted)}</em>
            </p>
          </div>
          <hr />
        </div>
      </PostStyle>
    </React.Fragment>
  );
}

export default Post;
