import voteCountReducer from "../../reducers/vote-count-reducer";

describe("voteCountReducer", () => {
  let action;
  const postData = {
    title: "How rare is this cat?",
    text: "Cat found with 5 toes on each paw!",
    timeSubmitted: 1672731107482,
    upvotes: 0,
    downvotes: 0,
    score: 3,
    id: 1,
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(voteCountReducer({}, { type: null })).toEqual({});
  });
  test("Should increase number of upvotes by one, increase total score by 1, and update state slice appropriately", () => {
    const { title, text, timeSubmitted, upvotes, downvotes, score, id } = postData;
    action = {
      type: "UPVOTE",
      title: title,
      text: text,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
      id: id,
    };
    expect(voteCountReducer(postData, action)).toEqual({
      title: "How rare is this cat?",
      text: "Cat found with 5 toes on each paw!",
      timeSubmitted: 1672731107482,
      upvotes: 1,
      downvotes: 0,
      score: 4,
      id: 1,
    });
  });
  test("Should increase number of downvotes by one, decrease total score by 1, and update state slices appropriately", () => {
    const { title, text, timeSubmitted, upvotes, downvotes, score, id } = postData;
    action = {
      type: "DOWNVOTE",
      title: title,
      text: text,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
      id: id,
    };
    expect(voteCountReducer(postData, action)).toEqual({
      title: "How rare is this cat?",
      text: "Cat found with 5 toes on each paw!",
      timeSubmitted: 1672731107482,
      upvotes: 0,
      downvotes: 1,
      score: 2,
      id: 1,
    });
  });
});
