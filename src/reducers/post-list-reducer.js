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
          title: action.title,
          text: action.text,
          imageUrl: action.imageUrl,
          ...state[id],
        },
      };
    case "UPVOTE":
      return Object.assign({}, state, {
        [id]: {
          title: title,
          text: text,
          timeSubmitted: timeSubmitted,
          upvotes: upvotes + 1,
          downvotes: downvotes,
          score: score + 1,
          id: id,
          imageUrl: imageUrl,
        },
      });
    case "DOWNVOTE":
      return Object.assign({}, state, {
        [id]: {
          title: title,
          text: text,
          timeSubmitted: timeSubmitted,
          upvotes: upvotes,
          downvotes: downvotes + 1,
          score: score - 1,
          id: id,
          imageUrl: imageUrl,
        },
      });
    default:
      return state;
  }
};

export default reducer;
