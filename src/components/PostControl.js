import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainPostList: [],
      selected: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selected !== null) {
      this.setState({
        selected: null,
        editing: false,
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

  handleEditClick = () => {
    this.setState({
      editing: true,
    });
  };

  handleEditingPostInList = (postToEdit) => {
    const newMainPostList = this.state.mainPostList.filter((post) => post.id !== this.state.selected.id).concat(postToEdit);
    this.setState({
      mainPostList: newMainPostList,
      selected: null,
      editing: false,
    });
  };

  handleDeletingPost = () => {
    const newMainPostList = this.state.mainPostList.filter((post) => post.id !== this.state.selected.id);
    this.setState({
      mainPostList: newMainPostList,
      selected: null,
    });
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyDisplayed = <EditPostForm post={this.state.selected} onEditTicket={this.handleEditingPostInList} />;
      buttonText = "Return to Posts";
    } else if (this.state.selected !== null) {
      currentlyDisplayed = <PostDetail post={this.state.selected} onEditClick={this.handleEditClick} onDeleteClick={this.handleDeletingPost} />;
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
