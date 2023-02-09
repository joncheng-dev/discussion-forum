import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onFormSubmission}>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <br />
        <textarea name="text" placeholder="Text (optional)" />
        <br />
        <br />
        <input type="text" name="imageUrl" placeholder="Image URL (optional)" />
        <br />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  onFormSubmission: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
