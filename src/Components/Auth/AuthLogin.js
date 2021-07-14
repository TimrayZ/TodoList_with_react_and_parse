import React, { useEffect, useState } from "react";
import { loginUser } from "./AuthService";
import AuthLoginForm from "./AuthLoginForm";
import { Redirect } from "react-router-dom";
import Parse from "parse";

const AuthRegister = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for login updates
  const [login, setLogin] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && login) {
      loginUser(newUser).then((userLogged) => {
        if (userLogged) {
          alert(
            `${userLogged.get("firstName")} ${userLogged.get(
              "email"
            )}, you successfully logged in!`
          );
        }
        // TODO: redirect user to main app
        setLogin(false);
      });
    }
  }, [newUser, login]);

    //if already logged in, jump to mainList page.
    Parse.User.enableUnsafeCurrentUser();
    const currentUser = Parse.User.current();
    if (currentUser) {
      alert(
        `${currentUser.get("firstName")} ${currentUser.get(
          "email"
        )}, you are already logged in, jump to edit page!`
      );
      return (
        <div>
          <Redirect to="/main" />
        </div>
      );
    }

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Logging in: ", e.target);
    setLogin(true);
  };

  return (
    <div>
      <AuthLoginForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthRegister;
