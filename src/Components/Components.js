import React from "react";
import MainModule from "./Main/Main.js";
import About from "./SecondView/About";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthLogin from "./Auth/AuthLogin";
import AuthLogout from "./Auth/AuthLogout";
import AuthRegister from "./Auth/AuthRegister";
import MainList from "./Main/MainList.js";

const Components = () => {
  return (
    <div>
      <Router>
        <div>
          {/* <Home /> */}
          <Route path="/main" exact component={MainModule} />
          <Route path="/mainlist" exact component={MainList} />
          {/* <About /> */}
          <Route path="/about" component={About} />
          <Route path="/auth" exact component={AuthModule} />
          <Route path="/register" component={AuthRegister} />
          <Route path="/login" component={AuthLogin} />
          <Route path="/logout" component={AuthLogout} />
        </div>
        <Redirect to="/about" />
        <Footer />
      </Router>
    </div>
  );
};

export default Components;
