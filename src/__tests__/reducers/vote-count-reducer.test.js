import voteCountReducer from "../../reducers/vote-count-reducer";

describe("voteCountReducer", () => {
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(voteCountReducer({}, { type: null })).toEqual({});
  });
});
