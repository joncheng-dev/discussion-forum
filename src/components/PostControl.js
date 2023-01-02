import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainPostList: [],
      selected: null,
    };
  }

  handleClick = () => {
    if (this.state.selected !== null) {
      this.setState({
        selected: null,
      });
    } else {
      this.setState((prevState) => ({
        formShowing: !prevState.formShowing,
      }));
    }
  };

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({
      formShowing: false,
      mainPostList: newMainPostList,
    });
  };

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter((post) => post.id === id)[0];
    this.setState({
      selected: selectedPost,
    });
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.state.selected !== null) {
      currentlyDisplayed = <PostDetail post={this.state.selected} />;
      buttonText = "Return to Posts";
    } else if (this.state.formShowing) {
      currentlyDisplayed = <NewPostForm onNewTicketCreation={this.handleAddingNewPostToList} />;
      buttonText = "Cancel";
    } else {
      currentlyDisplayed = <PostList postList={this.state.mainPostList} onPostSelection={this.handleChangingSelectedPost} />;
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
