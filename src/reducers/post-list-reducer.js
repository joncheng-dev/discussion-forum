const reducer = (state = {}, action) => {
  const { title, text, timeSubmitted, upvotes, downvotes, score, id, imageUrl } = action;
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          title: title,
          text: text,
          timeSubmitted: timeSubmitted,
          upvotes: upvotes,
          downvotes: downvotes,
          score: score,
          id: id,
          imageUrl: imageUrl,
        },
      });
    case "DELETE_POST":
      const newState = { ...state };
      delete newState[id];
      return newState;
    case "EDIT_POST":
      return {
        ...state,
        [id]: {
          ...state[id],
          title: title,
          text: text,
          imageUrl: imageUrl,
        },
      };
    case "UPVOTE":
      return {
        ...state,
        [id]: {
          ...state[id],
          upvotes: upvotes + 1,
          score: score + 1,
        },
      };
    case "DOWNVOTE":
      return {
        ...state,
        [id]: {
          ...state[id],
          downvotes: downvotes + 1,
          score: score - 1,
        },
      };
    default:
      return state;
  }
};

export default reducer;
