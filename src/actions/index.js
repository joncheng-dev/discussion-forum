export const deletePost = (id) => ({
  type: "DELETE_POST",
  id,
});

export const toggleForm = () => ({
  type: "TOGGLE_FORM",
});

export const editFormToggle = () => ({
  type: "EDIT_FORM_TOGGLE",
});

export const addPost = (post) => {
  const { title, text, timeSubmitted, upvotes, downvotes, score, id, imageUrl } = post;
  return {
    type: "ADD_POST",
    title: title,
    text: text,
    timeSubmitted: timeSubmitted,
    upvotes: upvotes,
    downvotes: downvotes,
    score: score,
    id: id,
    imageUrl: imageUrl,
  };
};

export const editPost = (post) => {
  const { title, text, id, imageUrl } = post;
  return {
    type: "EDIT_POST",
    title: title,
    text: text,
    id: id,
    imageUrl: imageUrl,
  };
};

export const upvote = (postToUpvote) => {
  const { upvotes, score, id } = postToUpvote;
  return {
    type: "UPVOTE",
    upvotes: upvotes,
    score: score,
    id: id,
  };
};
