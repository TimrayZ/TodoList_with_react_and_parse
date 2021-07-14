import React from "react";
import MainModule from "./Main/Main.js";
import About from "./SecondView/About";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";

const Components = () => {
  return (
    <div>
      <Router>
        <div>
          {/* <Home /> */}
          <Route path="/main" exact component={MainModule} />
          {/* <About /> */}
          <Route path="/about" component={About} />
          <Route path="/auth" exact component={AuthModule} />
          <Route path="/register" component={AuthRegister} />
          {/* <Route path="/login" component={AuthLogin} />
          <Route path="/main" component={MainModule} /> */}
        </div>
        <Redirect to="/auth" />
        <Footer />
      </Router>
    </div>
  );
};

export default Components;
