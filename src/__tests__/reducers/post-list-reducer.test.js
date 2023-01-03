import postListReducer from "../../reducers/post-list-reducer";

describe("postListReducer", () => {
  let action;
  const postData = {
    title: "How rare is this cat?",
    text: "Cat found with 5 toes on each paw!",
    timeSubmitted: 1672731107482,
    id: 1,
  };

  const currentState = {
    1: {
      title: "How rare is this cat?",
      text: "Cat found with 5 toes on each paw!",
      timeSubmitted: 1672731107482,
      id: 1,
    },
    2: {
      title: "Dog being derp!",
      text: "Dog in the snow",
      timeSubmitted: 1672731119244,
      id: 2,
    },
  };

  test("Should return default state if no action type passed into reducer", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new post data to mainPostList", () => {
    const { title, text, timeSubmitted, id } = postData;
    action = {
      type: "ADD_POST",
      title: title,
      text: text,
      timeSubmitted,
      id: id,
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        text: text,
        timeSubmitted: timeSubmitted,
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
        id: 2,
      },
    });
  });
});
