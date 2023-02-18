import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";

// function EditPostForm(props) {
//   const { postId } = props;
//   const post = useSelector((state) => state.mainPostList[postId]);
//   function handleEditPostFormSubmission(event) {
//     event.preventDefault();

//     props.onEditPost({
//       title: event.target.title.value,
//       text: event.target.text.value,
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

function EditPostForm(props) {
  const { post } = props;
  function handleEditPostFormSubmission(event) {
    event.preventDefault();

    props.onEditPost({
      title: event.target.title.value,
      text: event.target.text.value,
      timeSubmitted: post.timeSubmitted,
      upvotes: post.upvotes,
      downvotes: post.downvotes,
      score: post.score,
      id: post.id,
      imageUrl: event.target.imageUrl.value,
    });
  }
  return (
    <React.Fragment>
      <h2>Edit Post Form</h2>
      <ReusableForm onFormSubmission={handleEditPostFormSubmission} buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func,
};

export default EditPostForm;
