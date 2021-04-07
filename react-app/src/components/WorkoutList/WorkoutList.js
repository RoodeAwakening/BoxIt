import React, { useState, useEffect } from "react";
import "./WorkoutList.css";
import { useSelector, useDispatch } from "react-redux";
import { userWorkouts } from "../../store/workouts";


const WorkoutsList = () => {
  const dispatch = useDispatch();
 const userWorkout = useSelector((state) => state.workout.userWorkouts);

const allUserGroups = useSelector((state) => Object.values(state.userGroup));
console.log('test',userWorkout);


useEffect( () => {
    
  dispatch(userWorkouts());

}, [dispatch]);




return (
  <div>
<h2>Hi</h2>
  </div>
)

}

export default WorkoutsList