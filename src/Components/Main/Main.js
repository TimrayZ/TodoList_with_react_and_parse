import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import MainList from "./MainList";
import Parse from "parse";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const MainModule = () => {
  Parse.User.enableUnsafeCurrentUser();
  const currentUser = Parse.User.current();
  console.log("on main - User: ", currentUser);
  // return (
  //   <div>
  //     This is the main module.
  //     <MainList />
  //   </div>
  // );
  return (
    <div>
      <ProtectedRoute
        exact
        path="/mainlist"
        currentUser={currentUser}
        component={MainList}
      />
    </div>
  );
};

export default MainModule;
