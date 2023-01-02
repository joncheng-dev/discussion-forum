import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainPostList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formShowing: !prevState.formShowing,
    }));
  };

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({
      formShowing: false,
      mainPostList: newMainPostList,
    });
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.state.formShowing) {
      currentlyDisplayed = <NewPostForm onNewTicketCreation={this.handleAddingNewPostToList} />;
      buttonText = "Cancel";
    } else {
      currentlyDisplayed = <PostList postList={this.state.mainPostList} />;
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
