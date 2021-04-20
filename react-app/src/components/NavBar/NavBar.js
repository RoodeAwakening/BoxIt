import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";

import logo from "../../images/boxit_logo.png";

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <div>
          <a href="/">
            <img alt="logo" src={logo} id="nav-logo" />
          </a>
        </div>
      </div>
      <div className="navbar-right">
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            <h4>Home</h4>
          </NavLink>
        </div>
        <div>
          <NavLink to="/workout" exact={true} activeClassName="active">
            <h4>Start a new workout</h4>
          </NavLink>
        </div>
        <div>
          <NavLink to="/groups" exact={true} activeClassName="active">
            <h4>Groups</h4>
          </NavLink>
        </div>
        
        <div>
          <NavLink to="/my_progress" exact={true} activeClassName="active">
            <h4>Progress Photos</h4>
          </NavLink>
        </div>
        <div>
          <NavLink to="/action_shots" exact={true} activeClassName="active">
            <h4>Action Shots</h4>
          </NavLink>
        </div>

        <div>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
