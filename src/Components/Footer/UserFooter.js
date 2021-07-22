import React from "react";
import { Link } from "react-router-dom";
import Parse from "parse";

const UserFooter = () => {
  Parse.User.enableUnsafeCurrentUser();
  const currentUser = Parse.User.current();
  console.log(currentUser);

  //TODO: how can I dynamically change this footer when I log in, log out?
  // if (currentUser) {
    return (
      <footer>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
    </footer>
    );
  // } else {
    // return (
      
    // );
  // }
};

export default UserFooter;
