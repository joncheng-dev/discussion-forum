import postListReducer from "../../reducers/post-list-reducer";

describe("postListReducer", () => {
  test("Should return default state if no action type passed into reducer", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
});
