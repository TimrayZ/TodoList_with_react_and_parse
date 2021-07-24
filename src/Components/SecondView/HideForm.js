import React from "react";

/* STATELESS CHILD COMPONENT */
const HideForm = ({ onChange, onClick }) => {
  return (
    <div>
      <hr />
      {/* This is the main form child component. */}
      You can check the current timetable of Tim. After logging in, you can go
      to the editing page to add appointment.
    </div>
  );
};

export default HideForm;
