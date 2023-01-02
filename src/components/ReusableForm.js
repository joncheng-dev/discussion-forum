import React from "react";

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
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

export default ReusableForm;
