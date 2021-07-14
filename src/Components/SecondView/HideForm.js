import React from "react";

/* STATELESS CHILD COMPONENT */
const HideForm = ({ onChange, onClick }) => {
  return (
    <div>
      <hr />
      {/* This is the main form child component. */}
      You are not currently logged in, you can check the current timetable of
      Tim or go back to log in page.
    </div>
  );
};

export default HideForm;
