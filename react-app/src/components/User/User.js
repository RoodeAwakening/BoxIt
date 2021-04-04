import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./User.css";
//store stuff
import { userWorkouts } from "../../store/workouts";
import { allWorkoutsComplete } from "../../store/ranking";
import { loginThunk } from "../../store/session";

function User() {

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const workout = useSelector((state) => Object.values(state.workout));
  const allWorkoutsCompleted = useSelector((state)=> Object.values(state.ranking))

  const [loaderBoard, setloaderBoard] = useState('')


FINISH CALCULATING USER RANK AND LEADERBOARD
  
  useEffect( async() => {
    if (!workout.length) {
      dispatch(userWorkouts());
    }
    if (!allWorkoutsCompleted.length){
      dispatch(allWorkoutsComplete())
    }
    if(!loaderBoard.length){
    const response = await fetch("/api/workouts/user_workouts/completed");
    const completedWorkouts = await response.json();
    setloaderBoard(completedWorkouts.all_completed_workouts)
  }
  }, [dispatch]);

  //get total hours completed
 const hoursCompleted = (()=>{
   const totalWorkouts = workout.length
   const workoutTime = (totalWorkouts * 31 / 60)
   return `${Math.floor(workoutTime)} Hours Completed`
 })

 //get overall rank
 const overallRank =   (()  =>{

  
  return 'finish this route'
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
