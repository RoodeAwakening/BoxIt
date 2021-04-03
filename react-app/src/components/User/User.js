import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./User.css";
//store stuff
import { userWorkouts } from "../../store/workouts";

function User() {

  const dispatch = useDispatch();
  // Notice we use useParams here instead of getting the params
  // From props.
  // const { userId }  = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const workout = useSelector((state) => Object.values(state.workout));
  

  
  useEffect( () => {
    if (!workout.length) {
      dispatch(userWorkouts());
    
    }
  }, [dispatch]);

  //get total hours completed
 const hoursCompleted = (()=>{
   const totalWorkouts = workout.length
   const workoutTime = (totalWorkouts * 31 / 60)
   return `${Math.floor(workoutTime)} Hours Completed`
 })

 //get overall rank
 const overallRank = (()=>{
   return 'Complete this'
 })


  if (!sessionUser) {
    return null;
  }

  return (
    <div className="user_container">
      <div className="user_container-header">
        <div className="user_container-header-profilePhoto">
          <div><img src={sessionUser.profile_photo} /></div>
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
            <div><h5>Hours Completed</h5></div>
          <div>{hoursCompleted()}</div>
          </div>

          <div id="overallRank">
            <div><h5>Current Rank</h5></div>
          <div>{overallRank()}</div>
          </div>




        </div>
      </div>

    <h2>MORE STUFF HERE</h2>
    </div>
  );
}
export default User;
