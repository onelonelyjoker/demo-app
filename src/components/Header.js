import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function Header(props) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Home/">
          <h1 className="font-serif"> bahut faad page </h1>
        </Route>
        <Route path="/Home/features">
          <h1 className="font-serif"> with bahut faad features</h1>
        </Route>

        <Route path="/Home/Pricing">
          <h1 className="font-serif"> Raste ka maal saste me</h1>
        </Route>

        <Route path="/Home/Action">
          <h1 className="font-serif"> with bahut Action</h1>
        </Route>

        <Route path="/Home/2ndAction">
          <h1 className="font-serif"> with bahut faad 2nd action</h1>
        </Route>

        <Route path="/Home/Elsehere">
          <h1 className="font-serif"> bhag bsdk</h1>
        </Route>
      </Switch>
    </Router>
  );
}
export default Header;
