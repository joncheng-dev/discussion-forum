const reducer = (state = {}, action) => {
  const { title, text, timeSubmitted, id } = action;
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          title: title,
          text: text,
          timeSubmitted: timeSubmitted,
          id: id,
        },
      });
    case "DELETE_POST":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;
