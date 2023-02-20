import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import postListReducer from "../../reducers/post-list-reducer";
import formEditReducer from "../../reducers/form-edit-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainPostList: {},
      formVisibleOnPage: false,
      editing: false,
    });
  });
  test("Check that initial state of postListReducer matches root reducer", () => {
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, { type: null }));
  });
  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  test("Check that initial state of formEditReducer matches root reducer", () => {
    expect(store.getState().editing).toEqual(formEditReducer(undefined, { type: null }));
  });
  test("Check that ADD_POST action works for postListReducer and root reducer", () => {
    const action = {
      type: "ADD_POST",
      title: "How rare is this cat?",
      text: "Cat found with 5 toes on each paw!",
      timeSubmitted: 1672731107482,
      upvotes: 0,
      downvotes: 0,
      score: 0,
      id: 1,
      imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
    };
    store.dispatch(action);
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, action));
  });
  test("Check that ADD_POST action works for postListReducer and root reducer - 2nd post", () => {
    const action = {
      type: "ADD_POST",
      title: "Puppy sitting in the snow",
      text: "Adorable golden retriever puppy",
      timeSubmitted: 1672731119244,
      upvotes: 0,
      downvotes: 0,
      score: 0,
      id: 2,
      imageUrl: "https://img.freepik.com/free-photo/shot-adorable-white-golden-retriever-puppy-sitting-snow_181624-44122.jpg",
    };
    store.dispatch(action);
    expect(store.getState().mainPostList).toEqual(postListReducer(store.getState().mainPostList, action));
  });
  test("Check that TOGGLE_FORM action works for formVisibleReducer and root reducer", () => {
    const action = {
      type: "TOGGLE_FORM",
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
  test("Check that UPVOTE action works for postListReducer and root reducer", () => {
    const currentState = {
      1: {
        title: "How rare is this cat?",
        text: "Cat found with 5 toes on each paw!",
        timeSubmitted: 1672731107482,
        upvotes: 0,
        downvotes: 0,
        score: 0,
        id: 1,
        imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
      },
      2: {
        title: "Puppy sitting in the snow",
        text: "Adorable golden retriever puppy",
        timeSubmitted: 1672731119244,
        upvotes: 0,
        downvotes: 0,
        score: 0,
        id: 2,
        imageUrl: "https://img.freepik.com/free-photo/shot-adorable-white-golden-retriever-puppy-sitting-snow_181624-44122.jpg",
      },
    };
    const { upvotes, score, id } = currentState[1];
    const action = {
      type: "UPVOTE",
      upvotes: upvotes,
      score: score,
      id: id,
    };
    store.dispatch(action);
    expect(store.getState().mainPostList).toEqual(postListReducer(currentState, action));
  });
});
