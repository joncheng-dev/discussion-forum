import React from "react";

function Post(props) {
  const divStyle = {
    color: "white",
    backgroundColor: "#3A3B3C",
    paddingLeft: 10,
  };
  return (
    <React.Fragment>
      <div style={divStyle}>
        <hr />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default Post;
