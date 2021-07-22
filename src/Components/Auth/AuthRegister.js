import React, { useEffect, useState } from "react";
import { createUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { Redirect } from "react-router-dom";
import Parse from "parse";
import {getById} from "../../Common/Services/RegKeyServices"

const AuthRegister = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    regKeyTyped: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [regKey, setRegKey] = useState(false);

  useEffect(() => {

    getById("x4yZtGi3yS").then((regKey) => {
      console.log("key is:" , regKey);
      console.log("key typed in is:" , newUser.regKeyTyped);
      if (regKey === newUser.regKeyTyped) {
        setRegKey(true);
        console.log("key is:" , regKey, "equal to ", newUser.regKeyTyped);
      }
      else { setRegKey(false);}
    });
  }, [newUser.regKeyTyped]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (regKey){
      if (newUser && add) {
        createUser(newUser).then((userCreated) => {
          if (userCreated) {
            alert(
              `${userCreated.get("firstName")}, you successfully registered!`
            );
          }
          // TODO: redirect user to main app
          setAdd(false);
        });
      }
    }
    else if (add)
    {alert(
      `${newUser.regKeyTyped} is not a valid registration key, please contact zzhao6@nd.edu to gain access!`
    );
    setAdd(false);
    }
  }, [newUser, add, regKey]);

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
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div>
      <AuthForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthRegister;
