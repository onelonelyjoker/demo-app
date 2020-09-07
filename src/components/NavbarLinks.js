import React from "react";
import { Link } from "react-router-dom";
function NavbarLinks() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Home/features">
          Features
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Home/Pricing">
          Pricing
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="/drpdown"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/Home/Action">
            Action
          </Link>
          <Link className="dropdown-item" to="/Home/2ndAction">
            Another action
          </Link>
          <Link className="dropdown-item" to="/Home/Elsehere">
            Something else here
          </Link>
        </div>
      </li>
      <li className="nav-item float-right">
        <Link className="nav-link" to="/">
          Log out
        </Link>
      </li>
    </ul>
  );
}
export default NavbarLinks;
