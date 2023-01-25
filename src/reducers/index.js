import formVisibleReducer from "./form-visible-reducer";
import postListReducer from "./post-list-reducer";
import voteCountReducer from "./vote-count-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer,
  voteCountReducer,
  // voteCounter: voteCountReducer,
});

export default rootReducer;
