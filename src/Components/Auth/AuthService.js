import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used in auth login component
export const loginUser = (newUser) => {
  const user = Parse.User.logIn(newUser.email, newUser.password);

  console.log("User logging in: ", user);
  Parse.User.enableUnsafeCurrentUser()
  const currentUser = Parse.User.current();
  return user
    .then((currentUser) => {
      return currentUser;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};
