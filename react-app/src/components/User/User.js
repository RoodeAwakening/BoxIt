import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import "./User.css";
//store stuff
import { userWorkouts, allWorkouts } from "../../store/workouts";
import { allWorkoutsComplete } from "../../store/ranking";
import { userGroups } from "../../store/userGroups";



import LeaderBoard  from "../../components/LeaderBoard/LeaderBoard"
import MyGroups  from "../MyGroups/MyGroups"
import UserLinks  from "../UserLinks/UserLinks"

function User() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const workout = useSelector((state) => Object.values(state.workout));
  const allWorkoutsCompleted = useSelector((state) =>
    Object.values(state.ranking)
  );
  const userWorkout = useSelector((state) => state.workout.userWorkouts);





  useEffect( () => {
    
      dispatch(userWorkouts());
      dispatch(allWorkoutsComplete());
      dispatch(userGroups());
      dispatch(allWorkouts())

  
  
    
  }, [dispatch, sessionUser]);

  //get total hours completed
  const hoursCompleted = () => {
    const totalWorkouts = workout.length;
    const workoutTime = (totalWorkouts * 31) / 60;
    return `${Math.floor(workoutTime)} Hours Completed`;
  };

  //get overall rank
  const overallRank = () => {
    let place = 0;
    // set place to i plus one when i find the user
    for (let i = 0; i < allWorkoutsCompleted.length; i++) {
      const el = allWorkoutsCompleted[i];
      if (el.user_id === sessionUser.id) {
        place = i + 1;
      }
    }

    return place;
  };

  //get workouts completed
  const workoutData = () => {
    let num = 0
    for (const val in userWorkout){
      num += 1
    }

    return num
  }
 

  if (!sessionUser) {
    return <Redirect to='/welcome'/>;
  }

  return (
    <div className="user_container">
      <div className="user_container-header">
        <div className="user_container-header-profilePhoto">
          <div>
            <img src={sessionUser.profile_photo} />
          </div>
          <div>{sessionUser.user_name}</div>
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
            <div>{userWorkout ? workoutData() : "Start a workout!"}</div>
          </div>

          <div id="hoursCompleted">
            <div>
              <h5>Hours Completed</h5>
            </div>
            <div>{hoursCompleted()}</div>
          </div>

          <div id="overallRank">
            <div>
              <h5>Current Rank</h5>
            </div>
            <div>{overallRank()}</div>
          </div>
        </div>
      </div>

      <div className="user_container-middle-ContentBox">
        <div className="user_container-middle-leaderboard">
          <h2>Leaderboard</h2>
          <div id="leaderboard">
            <LeaderBoard />
          </div>
        </div>

        <div className="user_container-middle-myGroups">
          <h2>My Groups</h2>
          <div id="myGroups">
            <MyGroups/>
          </div>
        </div>

        <div className="user_container-middle-links">
          <h2>Links</h2>
          <div id="links">
            <UserLinks/>
          </div>
        </div>
      </div>


      <div className="user_container-bottom">
        <div className="user_container-bottom-warmup">

        <h2>warmup</h2>
        </div>
        <div className="user_container-bottom-workouts">

        <h2>workouts</h2>
        </div>



      </div>


    </div>
  );
}
export default User;
