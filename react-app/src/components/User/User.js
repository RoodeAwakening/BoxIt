import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./User.css";
//store stuff
import { userWorkouts } from "../../store/workouts";
import { allWorkoutsComplete } from "../../store/ranking";
import { loginThunk } from "../../store/session";

function User() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const workout = useSelector((state) => Object.values(state.workout));
  const allWorkoutsCompleted = useSelector((state) =>
    Object.values(state.ranking)
  );

  console.log("allWorkoutsCompleted", allWorkoutsCompleted);
  console.log("sessionUser", sessionUser.id);
  const [currentRank, setcurrentRank] = useState("");

  // console.log('2222222222', loaderBoard);

  useEffect(async () => {
    if (!workout.length) {
      dispatch(userWorkouts());
    }
    if (!allWorkoutsCompleted.length) {
      dispatch(allWorkoutsComplete());
    }
  }, [dispatch]);

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

  if (!sessionUser) {
    return null;
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
            <div>{workout.length}</div>
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
          <h2>leaderboard</h2>
          <div id="leaderboard">
            <h2>leaderboard content</h2>
          </div>
        </div>

        <div className="user_container-middle-myGroups">
          <h2>myGroups</h2>
          <div id="myGroups">
            <h2>myGroups content</h2>
          </div>
        </div>

        <div className="user_container-middle-links">
          <h2>links</h2>
          <div id="links">
            <h2>links content</h2>
          </div>
        </div>
      </div>






    </div>
  );
}
export default User;
