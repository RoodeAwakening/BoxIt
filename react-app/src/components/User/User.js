import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./User.css";
//store stuff
import { userWorkouts } from "../../store/workouts";

function User() {
  const [workouts, setWorkouts] = useState({});
  const dispatch = useDispatch();
  // Notice we use useParams here instead of getting the params
  // From props.
  // const { userId }  = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  console.log("test", workouts);

  useEffect(() => {
    if (!workouts.length) {
       dispatch(userWorkouts());
    }
  }, [dispatch]);


  // useEffect(() => {
  //   if (!sessionUser) {
  //     return
  //   }
  //   (async () => {
  //     // const response = await fetch(`/api/workouts/user_workouts`);
  //     // const workout = await response.json();
  //     const workout = await dispatch(userWorkouts)
  //    console.log('dispatch',workout);
  //    setWorkouts(workout);
  //   })();
  // }, [sessionUser]);

  if (!sessionUser) {
    return null;
  }

  return (
    <div className="user_container">
      <div className="user_container-header">
        <div className="user_container-header-profilePhoto">
          <img src={sessionUser.profile_photo} />
        </div>

        <div className="user_container-header-ContentBox">
          <div id="currentLevel">
            <div>
              <h5>Current Level</h5>
            </div>
            <div>{sessionUser.boxing_level}</div>
          </div>
          <div id="workoutsCompleted">
            <div>
              <h5>User Workouts</h5>
            </div>
            {/* <div>{userWorkouts.length}</div> */}
          </div>
          <div id="hoursCompleted"></div>
          <div id="currentRank"></div>
        </div>
      </div>

      <ul>
        <li>
          <strong>User Id</strong> {sessionUser.id}
        </li>
        <li>
          <strong>Username</strong> {sessionUser.user_name}
        </li>
        <li>
          <strong>Email</strong> {sessionUser.email}
        </li>
        <li>
          <strong>Boxing Level</strong>
        </li>
        <li>
          <strong>Profile Photo</strong>
        </li>
      </ul>
    </div>
  );
}
export default User;
