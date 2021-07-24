import React from "react";
import { Link } from "react-router-dom";
import UserFooter from "./UserFooter";

const Footer = () => (
  <footer>
    <nav>
      <ul class="nav">
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li> */}
        <li>
          <Link to="/main" class="navLink">
            Edit schedule
          </Link>
        </li>
        <li>
          <Link to="/about" class="navLink">
            Guest view
          </Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
