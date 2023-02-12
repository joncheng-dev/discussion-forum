import React from "react";
import styled from "styled-components";
import timeSince from "./time-since";
import PropTypes from "prop-types";

const PostDetailStyle = styled.div`
  color: white;
  background-color: #3a3b3c;

  .post-content {
    display: flex;
    flex-direction: row;
    border: 10px solid lightblue;
  }

  // Upvote, score, downvote
  .post-content > *:nth-child(1) {
    display: flex;
    flex: 1;
    background-color: #777777;
    flex-direction: column;
    align-content: flex-start;
    align-items: center;
    border: 5px solid yellow;
  }

  .post-score-column > *:nth-child(1) {
    // flex: 1;
    flex-direction: column;
    background-color: #7393b3;
    border: 2px solid red;
  }

  .post-score-column > *:nth-child(2) {
    // flex: 1;
    flex-direction: column;
    background-color: #708090;
    text-align: center;
    border: 2px solid blue;
  }

  .post-score-column > *:nth-child(3) {
    // flex: 1;
    flex-direction: column;
    background-color: #36454f;
    border: 2px solid goldenrod;
  }

  // Post Body
  .post-content > *:nth-child(2) {
    display: flex;
    flex: 50;
    background-color: #777777;
    flex-direction: column;
    margin: auto;
    align-items: flex-start;
    border: 5px solid purple;
  }
`;

function PostDetail(props) {
  const { post, onDeleteClick } = props;

  return (
    <React.Fragment>
      <PostDetailStyle>
        <h2>Post Detail</h2>
        <hr />
        <div className="post-content">
          <div className="post-score-column">
            <div className="score-top">
              <button onClick={() => props.whenUpvoteClicked(post.id)}>+</button>
            </div>
            <div className="score-mid">
              <p>{post.score}</p>
            </div>
            <div className="score-bot">
              <button onClick={() => props.whenDownvoteClicked(post.id)}>-</button>
            </div>
          </div>
          <div className="post-body">
            <h3>{post.title}</h3>
            <img className="post-image" src={post.imageUrl} alt="placeholder for image" />
            <p>{post.text}</p>
            <p>
              <em>{timeSince(post.timeSubmitted)}</em>
            </p>
          </div>
        </div>
        <hr />
        <button onClick={props.onEditClick}>Edit Ticket</button>
        <button onClick={() => onDeleteClick(post.id)}>Delete Ticket</button>
        <br />
      </PostDetailStyle>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default PostDetail;
