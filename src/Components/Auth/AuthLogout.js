import React, { useEffect, useState } from "react";
import { loginUser } from "./AuthService";
import AuthLoginForm from "./AuthLoginForm";
import { Redirect } from "react-router-dom";
import Parse from "parse";

const AuthRegister = () => {
  const user = Parse.User.logOut()
  return (
    <div>
      You are logged out, please go to the login page again or use the Guest view
    </div>
  );
};

export default AuthRegister;
