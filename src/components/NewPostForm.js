import React from "react";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();

    props.onNewPostCreation({
      title: event.target.title.value,
      text: event.target.text.value,
      timeSubmitted: Date.now(),
      upvotes: 0,
      downvotes: 0,
      score: 0,
      imageUrl: event.target.imageUrl.value,
      timeOpen: new Date(),
      formattedWaitTime: formatDistanceToNow(new Date(), {
        addSuffix: true,
      }),
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h2>New Post Form</h2>
      <ReusableForm onFormSubmission={handleNewPostFormSubmission} buttonText="Post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
};

export default NewPostForm;
