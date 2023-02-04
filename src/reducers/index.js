import formVisibleReducer from "./form-visible-reducer";
import postListReducer from "./post-list-reducer";
import formEditReducer from "./form-edit-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer,
  editing: formEditReducer,
});

export default rootReducer;
