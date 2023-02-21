import * as c from "./../actions/ActionTypes";

const reducer = (state = false, action) => {
  switch (action.type) {
    case c.EDIT_FORM_TOGGLE:
      return !state;
    default:
      return state;
  }
};

export default reducer;
