import * as c from "./ActionTypes";

export const deletePost = (id) => ({
  type: c.DELETE_POST,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const editFormToggle = () => ({
  type: c.EDIT_FORM_TOGGLE,
});

export const addPost = (post) => {
  const { title, text, timeSubmitted, upvotes, downvotes, score, timeOpen, formattedWaitTime, id, imageUrl } = post;
  return {
    type: c.ADD_POST,
    title: title,
    text: text,
    timeSubmitted: timeSubmitted,
    upvotes: upvotes,
    downvotes: downvotes,
    score: score,
    timeOpen: timeOpen,
    formattedWaitTime: formattedWaitTime,
    id: id,
    imageUrl: imageUrl,
  };
};

export const editPost = (post) => {
  const { title, text, id, imageUrl } = post;
  return {
    type: c.EDIT_POST,
    title: title,
    text: text,
    id: id,
    imageUrl: imageUrl,
  };
};

export const upvote = (postToUpvote) => {
  const { upvotes, score, id } = postToUpvote;
  return {
    type: c.UPVOTE,
    upvotes: upvotes,
    score: score,
    id: id,
  };
};

export const downvote = (postToDownvote) => {
  const { downvotes, score, id } = postToDownvote;
  return {
    type: c.DOWNVOTE,
    downvotes: downvotes,
    score: score,
    id: id,
  };
};

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime,
});
