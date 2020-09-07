import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import MyRoutes from "./components/MyRoutes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function Login(props) {
  const [email, setemail] = useState(false);
  const [pass, setpass] = useState(false);
  const [check, setcheck] = useState(false);
  if (check) {
    if (email == "admin@react.com" && pass == "1234") {
      sessionStorage.setItem("email", email);
      return (
        <div>
          <Router>
            <Route>
              <Redirect to="Home/" />
            </Route>
          </Router>

          <MyRoutes check={email} />
        </div>
      );
    } else {
      {
        return (
          <LoginForm
            setemail={setemail}
            setpass={setpass}
            setcheck={setcheck}
          />
        );
      }
    }
  } else {
    return (
      <LoginForm setemail={setemail} setpass={setpass} setcheck={setcheck} />
    );
  }
}
export default Login;
