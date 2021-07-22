import React from "react";
import { Link } from "react-router-dom";
import UserFooter from "./UserFooter";

const Footer = () => (
  <footer>
    <nav>
      <ul>
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li> */}
        <li>
          <Link to="/main">Edit todo list via login</Link>
        </li>
        <li>
          <Link to="/about">
            Go to guest version: check Tim's unavailable time
          </Link>
        </li>
        <UserFooter />
      </ul>
    </nav>
  </footer>
);

export default Footer;
