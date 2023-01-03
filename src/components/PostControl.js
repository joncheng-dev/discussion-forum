import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
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
    const { dispatch } = this.props;
    const { title, text, id } = newPost;
    const action = {
      type: "ADD_POST",
      title: title,
      text: text,
      id: id,
    };
    dispatch(action);
    this.setState({
      formShowing: false,
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
    const { dispatch } = this.props;
    const { title, text, id } = postToEdit;
    const action = {
      type: "ADD_POST",
      title: title,
      text: text,
      id: id,
    };
    dispatch(action);
    this.setState({
      selected: null,
      editing: false,
    });
  };

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_POST",
      id: id,
    };
    dispatch(action);
    this.setState({
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
        {currentlyDisplayed}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  mainPostList: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    mainPostList: state,
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
