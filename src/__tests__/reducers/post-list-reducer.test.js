import postListReducer from "../../reducers/post-list-reducer";
import * as c from "./../../actions/ActionTypes";

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
      imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
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

  test("Should return default state if no action type passed into reducer", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new post data to mainPostList", () => {
    const { title, text, timeSubmitted, upvotes, downvotes, score, id, imageUrl } = postData;
    action = {
      type: c.ADD_POST,
      title: title,
      text: text,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
      id: id,
      imageUrl: imageUrl,
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
        imageUrl: imageUrl,
      },
    });
  });

  test("Should successfully delete a post", () => {
    action = {
      type: c.DELETE_POST,
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
        imageUrl: "https://www.w3.org/Style/Woolly/woolly-mc.png",
      },
    });
  });
  test("Should increase number of upvotes by one, increase total score by 1, and update state slice appropriately", () => {
    const { upvotes, score, id } = currentState[1];
    let action2 = {
      type: c.UPVOTE,
      upvotes: upvotes,
      score: score,
      id: id,
    };
    expect(postListReducer(currentState, action2)).toEqual({
      1: {
        title: "How rare is this cat?",
        text: "Cat found with 5 toes on each paw!",
        timeSubmitted: 1672731107482,
        upvotes: 1,
        downvotes: 0,
        score: 1,
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
    });
  });
});
