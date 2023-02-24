import * as c from "./../actions/ActionTypes";

const reducer = (state = {}, action) => {
  const { title, text, timeSubmitted, upvotes, downvotes, score, timeOpen, formattedWaitTime, id, imageUrl } = action;
  switch (action.type) {
    case c.ADD_POST:
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
    case c.DELETE_POST:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.EDIT_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          title: title,
          text: text,
          imageUrl: imageUrl,
        },
      };
    case c.UPVOTE:
      return {
        ...state,
        [id]: {
          ...state[id],
          upvotes: upvotes + 1,
          score: score + 1,
        },
      };
    case c.DOWNVOTE:
      return {
        ...state,
        [id]: {
          ...state[id],
          downvotes: downvotes + 1,
          score: score - 1,
        },
      };
    case c.UPDATE_TIME:
      const newTicket = Object.assign({}, state[id], { formattedWaitTime });
      const updatedState = Object.assign({}, state, {
        [id]: newTicket,
      });
      return updatedState;
    default:
      return state;
  }
};

export default reducer;
