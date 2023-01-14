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
      const { dispatch } = this.props;
      const action = {
        type: "TOGGLE_FORM",
      };
      dispatch(action);
    }
  };

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { title, text, timeSubmitted, upvotes, downvotes, score, id } = newPost;
    const action = {
      type: "ADD_POST",
      title: title,
      text: text,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
      id: id,
    };
    dispatch(action);
    const action2 = {
      type: "TOGGLE_FORM",
    };
    dispatch(action2);
  };

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
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
    const { title, text, timeSubmitted, upvotes, downvotes, score, id } = postToEdit;
    const action = {
      type: "ADD_POST",
      title: title,
      text: text,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
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
      currentlyDisplayed = <EditPostForm post={this.state.selected} onEditPost={this.handleEditingPostInList} />;
      buttonText = "Return to Posts";
    } else if (this.state.selected !== null) {
      currentlyDisplayed = <PostDetail post={this.state.selected} onEditClick={this.handleEditClick} onDeleteClick={this.handleDeletingPost} />;
      buttonText = "Return to Posts";
    } else if (this.props.formVisibleOnPage) {
      currentlyDisplayed = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Cancel";
    } else {
      currentlyDisplayed = <PostList postList={this.props.mainPostList} onPostSelection={this.handleChangingSelectedPost} />;
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
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
