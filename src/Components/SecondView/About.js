import React from "react";
import HideList from "./HideList";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const MainModule = () => {
  return (
    <div>
      This is the main module.
      Current time offset at your timezone: {(new Date()).getTimezoneOffset()/60}
      <HideList />
    </div>
  );
};

export default MainModule;
