import React from "react";
import { withRouter } from "../commons/Util";
import { Link } from "react-router-dom";
const currentTab = (location, path) => {
  if (location?.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};
export const Menu = ({ router }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link
            style={currentTab(router.location, "/")}
            className="nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(router.location, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(router.location, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(router.location, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link
            style={currentTab(router.location, "/admin/signup")}
            className="nav-link"
            to="/admin/signup"
          >
            Signup
          </Link>
        </li>

        <li className="nav-item">
          <Link
            style={currentTab(router.location, "/admin/signin")}
            className="nav-link"
            to="/admin/signin"
          >
            Sign In
          </Link>
        </li>

        <li className="nav-item">
          <Link
            style={currentTab(router.location, "/admin/signout")}
            className="nav-link"
            to="/admin/signout"
          >
            Signout
          </Link>
        </li>
      </ul>
    </div>
  );
};

//wrapped with withRouter now all details of routes will be passed using props
export default withRouter(Menu);
