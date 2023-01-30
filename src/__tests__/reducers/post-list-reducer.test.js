import postListReducer from "../../reducers/post-list-reducer";

describe("postListReducer", () => {
  let action;
  const postData = {
    1: {
      title: "How rare is this cat?",
      text: "Cat found with 5 toes on each paw!",
      timeSubmitted: 1672731107482,
      upvotes: 0,
      downvotes: 0,
      score: 0,
      id: 1,
    },
  };

  const currentState = {
    1: {
      title: "How rare is this cat?",
      text: "Cat found with 5 toes on each paw!",
      timeSubmitted: 1672731107482,
      upvotes: 0,
      downvotes: 0,
      score: 0,
      id: 1,
    },
    2: {
      title: "Dog being derp!",
      text: "Dog in the snow",
      timeSubmitted: 1672731119244,
      upvotes: 0,
      downvotes: 0,
      score: 0,
      id: 2,
    },
  };

  test("Should return default state if no action type passed into reducer", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new post data to mainPostList", () => {
    const { title, text, timeSubmitted, upvotes, downvotes, score, id } = postData;
    action = {
      type: "ADD_POST",
      title: title,
      text: text,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
      id: id,
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        text: text,
        timeSubmitted: timeSubmitted,
        upvotes: upvotes,
        downvotes: downvotes,
        score: score,
        id: id,
      },
    });
  });

  test("Should successfully delete a post", () => {
    action = {
      type: "DELETE_POST",
      id: 1,
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: "Dog being derp!",
        text: "Dog in the snow",
        timeSubmitted: 1672731119244,
        upvotes: 0,
        downvotes: 0,
        score: 0,
        id: 2,
      },
    });
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
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        text: text,
        timeSubmitted: timeSubmitted,
        upvotes: upvotes + 1,
        downvotes: downvotes,
        score: score + 1,
        id: id,
      },
    });
  });
});
