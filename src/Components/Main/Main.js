import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import MainList from "./MainList";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const MainModule = () => {
  const [flag, setFlag] = useState(false);

  var check = document.getElementById("flagBox");

  useEffect(() => {
    if (check) {
      if (check.checked) {
        console.log("GOOD");
        setFlag(true);
      } else {
        console.log("BAD");
        setFlag(false);
      }
    }
  }, [check]);

  // return (
  //   <div>
  //     This is the main module.
  //     <MainList />
  //   </div>
  // );
  return (
    <div>
      <ProtectedRoute exact path="/main" flag={flag} component={MainList} />
    </div>
  );
};

export default MainModule;
