import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Workouts.css";

const Workouts = () => {
  const sessionUser = useSelector((state) => state.session.user);

  /////

  //////

  if (!sessionUser) {
    return <Redirect to="/welcome" />;
  }
  return (
    <div className="workouts_container">
      <div className="workouts_header">
        <div className="workouts_header-coach">
          <h6>Coach</h6>
        </div>
        <div className="workouts_header-workout-progress">
          <h6>Progress</h6>
        </div>
      </div>
      <div className="workouts_body">
        <div className="workouts_body-clock">
          <h6>Clock</h6>
        </div>
      </div>
      <div className="workouts_footer">
        <div className="workouts_footer-rating">
          <h6>Ratings</h6>
        </div>
        <div className="workouts_footer-favorite">
          <h6>Favorite</h6>
        </div>
        <div className="workouts_footer-pause-end">
          <h6>pause end</h6>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
