import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login";
import Header from "./Header";
import Footer from "./Footer";

function MyRoutes(props) {
  if (props.check != null) {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Home/">
            <Header />
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return <div></div>;
  }
}
export default MyRoutes;
