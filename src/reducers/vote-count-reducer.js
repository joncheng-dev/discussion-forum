const reducer = (state = {}, action) => {
  const { upvotes, downvotes, score, id } = action;
  switch (action.type) {
    case "UPVOTE":
      return {
        ...state,
        upvotes: upvotes + 1,
        score: score + 1,
        id: id,
      };
    case "DOWNVOTE":
      return {
        ...state,
        downvotes: downvotes + 1,
        score: score - 1,
        id: id,
      };
    default:
      return state;
  }
};

export default reducer;

// const reducer = (state = {}, action) => {
//   const { title, text, timeSubmitted, upvotes, downvotes, score, id } = action;
//   switch (action.type) {
//     case "UPVOTE":
//       return {
//         ...state,
//         title: title,
//         text: text,
//         timeSubmitted: timeSubmitted,
//         upvotes: upvotes + 1,
//         downvotes: downvotes,
//         score: score + 1,
//         id: id,
//       };
//     case "DOWNVOTE":
//       return {
//         ...state,
//         title: title,
//         text: text,
//         timeSubmitted: timeSubmitted,
//         upvotes: upvotes,
//         downvotes: downvotes + 1,
//         score: score - 1,
//         id: id,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
