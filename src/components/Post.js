import React from "react";
import styled from "styled-components";
import timeSince from "./time-since";
import PropTypes from "prop-types";

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

  .post-score-column > *:nth-child(1) {
    flex: 1;
    background-color: #7393b3;
  }

  .post-score-column > *:nth-child(2) {
    flex: 1;
    background-color: #708090;
    text-align: center;
  }

  .post-score-column > *:nth-child(3) {
    flex: 1;
    background-color: #36454f;
  }

  // Post Body
  .post-content > *:nth-child(2) {
    display: flex;
    flex: 25;
    background-color: #777777;
    margin: auto;
  }

  // Picture
  .post-body > *:nth-child(1) {
    flex: 2;
    background-color: #555555;
    margin: auto;
  }

  .post-image {
    display: flex;
    width: 50%;
    height: auto;
    margin: auto;
    align-items: center;
  }

  // Title, Link
  // Post Author, Time Posted Ago
  .post-body > *:nth-child(2) {
    flex: 8;
    justify-content: flex-start;
    background-color: #999999;
  }
`;

function Post(props) {
  return (
    <React.Fragment>
      <PostStyle>
        <div className="post-content">
          <div className="post-score-column">
            <div className="score-top">
              <button onClick={() => props.whenUpvoteClicked(props.id)}>+</button>
            </div>
            <div className="score-mid">
              <p>{props.score}</p>
            </div>
            <div className="score-bot">
              <button onClick={() => props.whenDownvoteClicked(props.id)}>-</button>
            </div>
          </div>
          <div onClick={() => props.whenPostClicked(props.id)} className="post-body">
            <div className="picture-column">
              <img className="post-image" src={props.imageUrl} alt="placeholder for image" />
            </div>
            <div className="content-column">
              <h3>{props.title}</h3>
              <p>{props.text}</p>
              <p>
                <em>{timeSince(props.timeSubmitted)}</em>
              </p>
            </div>
          </div>
        </div>
      </PostStyle>
    </React.Fragment>
  );
}

Post.propTypes = {
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func,
  whenPostClicked: PropTypes.func,
  id: PropTypes.string,
  // imageUrl: PropTypes.string,
  score: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  timeSubmitted: PropTypes.number,
};

export default Post;
