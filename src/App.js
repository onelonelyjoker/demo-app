import React, { useState } from "react";
import Login from "./Login";
import { propTypes } from "react-bootstrap/esm/Image";
import MyRoutes from "./components/MyRoutes";
function App() {
  let checq = sessionStorage.getItem("email");
  if (checq != null) {
    return (
      <div>
        
        <MyRoutes check={checq} />
      </div>
    );
  } else {
    return <Login />;
  }
}

export default App;
