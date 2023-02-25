import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function EditPostForm(props) {
  const { postId } = props;
  const post = useSelector((state) => state.mainPostList[postId]);
  const { timeSubmitted, upvotes, downvotes, score, id, timeOpen, formattedWaitTime } = post;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();

    props.onEditPost({
      title: event.target.title.value,
      text: event.target.text.value,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
      id: id,
      imageUrl: event.target.imageUrl.value,
      timeOpen: timeOpen,
      formattedWaitTime: formattedWaitTime,
    });
  }
  return (
    <React.Fragment>
      <h2>Edit Post Form</h2>
      <ReusableForm onFormSubmission={handleEditPostFormSubmission} buttonText="Update Post" />
    </React.Fragment>
  );
}

// function EditPostForm(props) {
//   const { post } = props;
//   function handleEditPostFormSubmission(event) {
//     event.preventDefault();

//     console.log("from EditPostForm component to PostControl:", {
//       title: event.target.title.value,
//       text: event.target.text.value,
//       timeSubmitted: post.timeSubmitted,
//       upvotes: post.upvotes,
//       downvotes: post.downvotes,
//       score: post.score,
//       id: post.id,
//       imageUrl: event.target.imageUrl.value,
//     });

//     props.onEditPost({
//       title: event.target.title.value,
//       text: event.target.text.value,
//       timeSubmitted: post.timeSubmitted,
//       upvotes: post.upvotes,
//       downvotes: post.downvotes,
//       score: post.score,
//       id: post.id,
//       imageUrl: event.target.imageUrl.value,
//     });
//   }
//   return (
//     <React.Fragment>
//       <h2>Edit Post Form</h2>
//       <ReusableForm onFormSubmission={handleEditPostFormSubmission} buttonText="Update Post" />
//     </React.Fragment>
//   );
// }

EditPostForm.propTypes = {
  onEditPost: PropTypes.func,
};

export default EditPostForm;
