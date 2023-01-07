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
      border: 1px solid black;
    }

    // Upvote, score, downvote
    .post-content > *:nth-child(1) {
      display: flex;
      flex: 1;
      background-color: #777777;
      flex-direction: column;
      margin: auto;
      align-items: center;
    }

    .score-column > *:nth-child(1) {
      flex: 1;
      background-color: #7393b3;
    }

    .score-column > *:nth-child(2) {
      flex: 1;
      background-color: #708090;
      text-align: center;
    }

    .score-column > *:nth-child(3) {
      flex: 1;
      background-color: #36454f;
    }

    // Picture
    .post-content > *:nth-child(2) {
      flex: 3;
      background-color: #555555;
      margin: auto;
    }

    .post-image {
      display: block;
      margin: auto;
    }

    // Title, Link
    // Post Author, Time Posted Ago
    .post-content > *:nth-child(3) {
      flex: 17;
      justify-content: flex-start;
      background-color: #999999;
    }
  `;

  return (
    <React.Fragment>
      <PostStyle>
        <div onClick={() => props.whenPostClicked(props.id)} className="post-content">
          <div className="score-column">
            <div className="score-top">
              <button>+</button>
            </div>
            <div className="score-mid">
              <p>score</p>
            </div>
            <div className="score-bot">
              <button>-</button>
            </div>
          </div>
          <div className="picture-column">
            <img className="post-image" src="https://www.w3.org/Style/Woolly/woolly-mc.png" alt="placeholder a lamb" />
          </div>
          <div className="right-column">
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
