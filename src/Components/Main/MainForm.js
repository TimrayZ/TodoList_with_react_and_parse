import React from "react";

/* STATELESS CHILD COMPONENT */
const MainForm = ({ onChange, onStChange, onEdChange, onClick }) => {
  return (
    <div>
      <hr />
      {/* This is the main form child component. */}
      Click submit to add a todo
      <form>
        <input text="test" onChange={onChange} />
        <br />
        <input type="datetime-local" onChange={onStChange} />
        <br />
        <input type="datetime-local" onChange={onEdChange} />
        <br />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MainForm;
