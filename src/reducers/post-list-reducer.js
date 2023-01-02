const reducer = (state = {}, action) => {
  const { title, text, id } = action;
  switch (action.type) {
    case "ADD_TICKET":
      return Object.assign({}, state, {
        [id]: {
          title: title,
          text: text,
          id: id,
        },
      });
    default:
      return state;
  }
};

export default reducer;
