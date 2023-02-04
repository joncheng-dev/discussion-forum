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
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.editing) {
      const action = {
        type: "EDIT_FORM_TOGGLE",
      };
      dispatch(action);
      this.setState({
        selected: null,
      });
    } else if (this.state.selected !== null) {
      this.setState({
        selected: null,
      });
    } else {
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
    const { dispatch } = this.props;
    const action = {
      type: "EDIT_FORM_TOGGLE",
    };
    dispatch(action);
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
    const action2 = {
      type: "EDIT_FORM_TOGGLE",
    };
    dispatch(action2);
    this.setState({
      selected: null,
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

  handleUpvoteClick = (postId) => {
    const { dispatch } = this.props;
    const postToUpvote = this.props.mainPostList[postId];
    const { title, text, timeSubmitted, upvotes, downvotes, score, id } = postToUpvote;
    const action = {
      type: "UPVOTE",
      title: title,
      text: text,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
      id: id,
    };
    dispatch(action);
  };

  handleDownvoteClick = (postId) => {
    const { dispatch } = this.props;
    const postToDownvote = this.props.mainPostList[postId];
    const { title, text, timeSubmitted, upvotes, downvotes, score, id } = postToDownvote;
    const action = {
      type: "DOWNVOTE",
      title: title,
      text: text,
      timeSubmitted: timeSubmitted,
      upvotes: upvotes,
      downvotes: downvotes,
      score: score,
      id: id,
    };
    dispatch(action);
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.props.editing) {
      currentlyDisplayed = <EditPostForm post={this.state.selected} onEditPost={this.handleEditingPostInList} />;
      buttonText = "Return to Posts";
    } else if (this.state.selected !== null) {
      currentlyDisplayed = <PostDetail post={this.state.selected} onEditClick={this.handleEditClick} onDeleteClick={this.handleDeletingPost} />;
      buttonText = "Return to Posts";
    } else if (this.props.formVisibleOnPage) {
      currentlyDisplayed = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Cancel";
    } else {
      currentlyDisplayed = (
        <PostList
          postList={this.props.mainPostList}
          onUpvoteClick={this.handleUpvoteClick}
          onDownvoteClick={this.handleDownvoteClick}
          onPostSelection={this.handleChangingSelectedPost}
        />
      );
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
  editing: PropTypes.bool,
};

const mapStateToProps = (state) => {
  // function sortPostsByScore(a, b) {
  //   const score1 = a.score;
  //   const score2 = b.score;

  //   let comparison = 0;

  //   if (score1 > score2) {
  //     comparison = 1;
  //   } else if (score1 < score2) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }

  // const orderedPostList = state.mainPostList.score.sort((a, b) => (a.score > b.score ? 1 : -1));

  return {
    // mainPostList: orderedPostList,
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
