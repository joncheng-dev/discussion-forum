import React from "react";
import styled from "styled-components";
import timeSince from "./time-since";
import PropTypes from "prop-types";

function PostDetail(props) {
  const PostDetailStyle = styled.div`
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
      // flex: 1;
      background-color: #7393b3;
    }

    .post-score-column > *:nth-child(2) {
      // flex: 1;
      background-color: #708090;
      text-align: center;
    }

    .post-score-column > *:nth-child(3) {
      // flex: 1;
      background-color: #36454f;
    }

    // Post Body
    .post-content > *nth-child(2) {
      display: flex;
      flex: 25;
      background-color: #777777;
      margin: auto;
    }
  `;

  const { post, onDeleteClick } = props;

  return (
    <React.Fragment>
      <PostDetailStyle>
        <h2>Post Detail</h2>
        <hr />
        <div className="post-content">
          <div className="post-score-column">
            <div className="score-top">
              <button>+</button>
            </div>
            <div className="score-mid">
              <p>{post.score}</p>
            </div>
            <div className="score-bot">
              <button>-</button>
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
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default PostDetail;
