import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";

import "./User.css";
//store stuff
import { userWorkouts } from "../../store/userWorkouts";
import { allWorkouts } from "../../store/workouts";
import { allWorkoutsComplete } from "../../store/ranking";
// import { userGroups } from "../../store/userGroups";

// components
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import MyGroups from "../MyGroups/MyGroups";
import UserLinks from "../UserLinks/UserLinks";
import WorkoutsList from "../WorkoutList/WorkoutList";
import ProgressPhotos from "../ProgressPhotos/ProgressPhotos";

function User() {
  const dispatch = useDispatch();

  const userWorkout = useSelector((state) => Object.values(state.userWorkouts));
  const sessionUser = useSelector((state) => state.session.user);
  const workout = useSelector((state) => Object.values(state.workout));
  const allWorkoutsCompleted = useSelector((state) =>
    Object.values(state.ranking)
  );


  const [quote, setQuote] = useState("");

  useEffect(() => {
    dispatch(userWorkouts());
    dispatch(allWorkoutsComplete());

    dispatch(allWorkouts());
    getQuote();
  // }, [dispatch]);
  }, [dispatch, sessionUser]);

  //get total hours completed
  const hoursCompleted = () => {
    const totalWorkouts = userWorkout.length;
    const workoutTime = (totalWorkouts * 31) / 60;
    return `${Math.floor(workoutTime)}`;
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

    return <h3> # {place}</h3>;
  };

  //get workouts completed
  const workoutData = () => {
    let num = 0;
    for (const val in userWorkout) {
      num += 1;
    }
    
    return num;
  };
  
  //update boxers level
  const levelUp = () =>{
    // NEED TO UPDATE THIS TO INCLUDE A 
    // PATCH REQUEST TO UPDATE LEVEL IN DB
    let currentWorkouts =  workoutData()
    // 1 - 30 workouts is Beginner
    if(currentWorkouts <= 30 ){
      return <h3>Beginner</h3>
    }
    // 31 - 60 workouts is Intermediate
    if(currentWorkouts <= 60 && currentWorkouts >= 30 ){
      return <h3>Intermediate</h3>
    }
    // 61 - 99 Advanced
    if(currentWorkouts <= 99 && currentWorkouts >= 61 ){
      return <h3>Advanced</h3>
    }
    // 100 + Expert
    if(currentWorkouts >= 100 ){
      return <h3>Expert</h3>
    }

  }
// completed
  //get quote
  async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes/");
    const data = await response.json();
    let pos = Math.floor(Math.random() * (1642 - 0));

    setQuote(`${data[pos].text} - ${data[pos].author}`);
  }

  if (!sessionUser) {
    return <Redirect to="/welcome" />;
  }

  return (
    <div className="user_container">
      <div className="quote-of-the-day">
        <h2>{quote}</h2>
        <h2 id='noPhone'>Please Open this on your PC or Tablet</h2>
      </div>
      <div className="user_container-header">

        {/* TOP SECTION 1 */}
        <div className="user_container-header-2">
          <div className="user_container-header-2-top">



            {/* <div className="user_container-header-profilePhoto">
              <div>
                <img src={sessionUser.profile_photo} />
              </div>
              <div className="username">
                <h2>{sessionUser.user_name}</h2>
              </div>
            </div> */}




            {/* TOP SECTION 2 */}
            <div className="user_container-header-userStats">
              <div className="user_container-header-ContentBox">




                <div id="hoursCompleted">
                  <div>
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3>Hours Completed</h3>
                  </div>
                  <div>
                    <h3>{hoursCompleted()}</h3>
                  </div>
                </div>

                <div id="currentLevel">
                  <div>
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <div>
                    <h3>My Level</h3>
                  </div>
                  <div>
                    <div id='currentLevel-text'>{levelUp()}</div>
                  </div>
                </div>
                <div id="startWorkout">
                  <NavLink
                    to="/workout"
                    exact={true}
                    activeClassName="active"
                    className="links-each"
                  >
                    Start a new workout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="user_container-header-2-bottom">
            <div className="user_container-bottom">
              <div className="user_container-bottom-warmup">
                <h1>My Workouts</h1>
              </div>
              <div className="user_container-bottom-workouts">
                <WorkoutsList />
              </div>
            </div>
          </div>
        </div>
        <div className="user_container-header-leaderBoard">
          <div className="user_container-header-right-leaderboard">
            <h2 className="user_container-header-right-leaderboard-title">
              Leaderboard
            </h2>
            <hr />

            <div id="leaderboard">
              <LeaderBoard />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default User;
