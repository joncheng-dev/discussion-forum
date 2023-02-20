import * as actions from "./../../actions";

describe("Discussion Forum actions", () => {
  it("deletePost should create DELETE_POST action", () => {
    expect(actions.deletePost(1)).toEqual({
      type: "DELETE_POST",
      id: 1,
    });
  });
});
