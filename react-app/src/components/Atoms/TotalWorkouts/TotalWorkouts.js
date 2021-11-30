import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './TotalWorkouts.module.css'

function TotalWorkouts() {
  const userWorkout = useSelector((state) => Object.values(state.userWorkouts));


    //get workouts completed
    const workoutData = () => {
      let num = 0;
      for (const val in userWorkout) {
        num += 1;
      }
      
      return num;
    };

  return (
    <div className={styles.TotalWorkouts_container}>
    <div>
      <i className="fas fa-dumbbell"></i>
    </div>
    <div className={styles.TotalWorkouts_container__heading}>
      <h3>Total Workouts</h3>
    </div>
    <div>
    <h3>{userWorkout ? workoutData() : "Start a workout!"}</h3>
    </div>
  </div>
  )
}

export default TotalWorkouts
