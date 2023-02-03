const reducer = (state = false, action) => {
  switch (action.type) {
    case "EDIT_FORM_TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default reducer;
