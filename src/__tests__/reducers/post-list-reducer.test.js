import postListReducer from "../../reducers/post-list-reducer";

describe("postListReducer", () => {
  let action;
  const postData = {
    title: "How rare is this cat?",
    text: "Cat found with 5 toes on each paw!",
    id: 1,
  };

  test("Should return default state if no action type passed into reducer", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new post data to mainPostList", () => {
    const { title, text, id } = postData;
    action = {
      type: "ADD_TICKET",
      title: title,
      text: text,
      id: id,
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        text: text,
        id: id,
      },
    });
  });
});
