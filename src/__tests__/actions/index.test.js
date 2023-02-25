import * as actions from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("Discussion Forum actions", () => {
  it("deletePost should create DELETE_POST action", () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1,
    });
  });
  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM,
    });
  });
  it("editFormToggle should create EDIT_FORM_TOGGLE action", () => {
    expect(actions.editFormToggle()).toEqual({
      type: c.EDIT_FORM_TOGGLE,
    });
  });
  it("addPost should create ADD_TICKET action", () => {
    expect(
      actions.addPost({
        title: "How rare is this cat?",
        text: "Cat found with 5 toes on each paw!",
        timeSubmitted: 1672731107482,
        upvotes: 0,
        downvotes: 0,
        score: 0,
        timeOpen: 0,
        formattedWaitTime: "less than a minute ago",
        id: 1,
        imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
      })
    ).toEqual({
      type: c.ADD_POST,
      title: "How rare is this cat?",
      text: "Cat found with 5 toes on each paw!",
      timeSubmitted: 1672731107482,
      upvotes: 0,
      downvotes: 0,
      score: 0,
      timeOpen: 0,
      formattedWaitTime: "less than a minute ago",
      id: 1,
      imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
    });
  });
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
      title: "Dog being derp!",
      text: "Dog in the snow",
      timeSubmitted: 1672731119244,
      upvotes: 0,
      downvotes: 0,
      score: 0,
      id: 2,
      imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
    },
  };
  it("editPost should create EDIT_POST action", () => {
    const { title, text, id, imageUrl } = currentState[1];
    expect(actions.editPost(currentState[1])).toEqual({
      type: c.EDIT_POST,
      title: title,
      text: text,
      id: id,
      imageUrl: imageUrl,
    });
  });
  it("upvote should create UPVOTE action", () => {
    const { upvotes, score, id } = currentState[1];
    expect(actions.upvote(currentState[1])).toEqual({
      type: c.UPVOTE,
      upvotes: upvotes,
      score: score,
      id: id,
    });
  });
  it("downvote should create DOWNVOTE action", () => {
    const { downvotes, score, id } = currentState[1];
    expect(actions.downvote(currentState[1])).toEqual({
      type: c.DOWNVOTE,
      downvotes: downvotes,
      score: score,
      id: id,
    });
  });
  it("updateTime should create UPDATE_TIME action", () => {
    expect(actions.updateTime(1, "less than a minute ago")).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "less than a minute ago",
    });
  });
});
