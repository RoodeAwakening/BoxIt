import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
//store
// import {  allWorkouts } from "../../store/workouts";
import { userWorkouts } from "../../store/userWorkouts";
import { allWorkouts } from "../../store/workouts";


import WorkoutModal from "../WorkoutModal/WorkoutModal";
import "./Workouts.css";

const Workouts = (workout) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const workouts = useSelector((state) => state.workout);
  const [workoutModalIsOpen, setWorkoutModalisOpen] = useState(false);
  const [workoutId, setWorkoutid] = useState(0);


  useEffect( () => {

      // dispatch(userWorkouts());
      // dispatch(allWorkoutsComplete());
      dispatch(allWorkouts())

  }, [dispatch, sessionUser]);

  const userWorkout =  () => {
    let num = 1;
    for (const val in workouts) {
      num += 1;
    }

    let pos = Math.floor(Math.random() * (num - 1) + 1);
    return (
      <>
     
        <div className="workouts_body">
        <div className="workouts_header">
          <div className="workouts_header-coach">
            <h2>Your Coach</h2>
            <img src={workouts[pos].coach_photo_url } alt='coach'/>
          </div>
        </div>
          <div className="workouts_body-clock">
            <video src={workouts[pos].audio_url} autoPlay onEnded={() => logWorkout(workouts[pos].id)}/>
          </div>
          <div className="workouts_header">
        <div className="workouts_header-coach">
            <h2>You</h2>
            <img src={sessionUser.profile_photo} alt='profile picture'/>
          </div>
          </div>
        </div>
      </>
    );
  };
  
  const logWorkout = (id) =>{
    
    setWorkoutid(id)
    setWorkoutModalisOpen(true)
  }




  if (!sessionUser) {
    return <Redirect to="/welcome" />;
  }
  return (
    <div className="workouts_container">
      {workouts ? userWorkout() : "No Workouts Available"}
      <div className="workouts_footer">
        <div className="workouts_footer-rating">
          <div>

        <WorkoutModal
            workoutModalIsOpen={workoutModalIsOpen}
            setWorkoutModalisOpen={setWorkoutModalisOpen}
            workoutId={workoutId}
            />
            </div>

        </div>
      
      </div>
    </div>
  );
};

export default Workouts;
