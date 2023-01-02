import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formShowing: !prevState.formShowing,
    }));
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.state.formShowing) {
      currentlyDisplayed = <NewPostForm />;
      buttonText = "Cancel";
    } else {
      currentlyDisplayed = <PostList />;
      buttonText = "Create New Post";
    }

    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyDisplayed}
      </React.Fragment>
    );
  }
}

export default PostControl;
