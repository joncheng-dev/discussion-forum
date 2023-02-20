import * as actions from "./../../actions";

describe("Discussion Forum actions", () => {
  it("deletePost should create DELETE_POST action", () => {
    expect(actions.deletePost(1)).toEqual({
      type: "DELETE_POST",
      id: 1,
    });
  });
  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({
      type: "TOGGLE_FORM",
    });
  });
  it("editFormToggle should create EDIT_FORM_TOGGLE action", () => {
    expect(actions.editFormToggle()).toEqual({
      type: "EDIT_FORM_TOGGLE",
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
        id: 1,
        imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
      })
    ).toEqual({
      type: "ADD_POST",
      title: "How rare is this cat?",
      text: "Cat found with 5 toes on each paw!",
      timeSubmitted: 1672731107482,
      upvotes: 0,
      downvotes: 0,
      score: 0,
      id: 1,
      imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
    });
  });
  // it("upvotePost should create UPVOTE action", () => {
  //   expect(actions.upvote({})).toEqual({
  //     type: "UPVOTE",
  //   });
  // });
});
