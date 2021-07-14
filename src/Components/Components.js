import React from "react";
import MainModule from "./Main/Main.js";
import About from "./About/About";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Components = () => {
  return (
    <div>
      <Router>
      <div>
        {/* <Home /> */}
        <Route path="/main" exact component={MainModule} />
        {/* <About /> */}
        <Route path="/about" component={About} />
      </div>
      <Footer />
    </Router>
    </div>
  );
};

export default Components;
