export const deletePost = (id) => ({
  type: "DELETE_POST",
  id,
});

export const toggleForm = () => ({
  type: "TOGGLE_FORM",
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
