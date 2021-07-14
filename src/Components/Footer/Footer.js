import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/main">MainModule</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
