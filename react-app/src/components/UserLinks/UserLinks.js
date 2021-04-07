import React from "react";

import { NavLink } from "react-router-dom";

import "./UserLinks.css";

export default function UserLinks() {
  return (
    <div className="links-group ">
      {/* <a className='links-each' href='/users'>Start a new workout</a>  */}

      <NavLink
        to="/workout"
        exact={true}
        activeClassName="active"
        className="links-each"
        
      >
        Start a new workout
      </NavLink>

      <NavLink
        to="/"
        exact={true}
        activeClassName="active"
        className="links-each"
      >
        Groups
       </NavLink>
      <NavLink
        to="/"
        exact={true}
        activeClassName="active"
        className="links-each"
      >
        Favorite Workouts
       </NavLink>
      <NavLink
        to="/"
        exact={true}
        activeClassName="active"
        className="links-each"
      >
        Progress Photos
       </NavLink>
      <NavLink
        to="/"
        exact={true}
        activeClassName="active"
        className="links-each"
      >
        Action Shots
       </NavLink>
    </div>
  );
}
