import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import styles from './HoursCompleted.module.css'

function HoursCompleted() {
  const dispatch = useDispatch();
  const userWorkout = useSelector((state) => Object.values(state.userWorkouts));

    //get total hours completed
    const totalHoursCompleted = () => {
      const totalWorkouts = userWorkout.length;
      const workoutTime = (totalWorkouts * 31) / 60;
      return (
          <h3>

        {`${Math.floor(workoutTime)}`}
          </h3>
        ) 
    };


  return (
 <div className={styles.HoursCompleted_container}>
    <div>
      <i className="fas fa-trophy"></i>
    </div>
    <div className={styles.HoursCompleted_container__heading}>
      <h3>Current HoursCompleted_container</h3>
    </div>
    <div>
      <div>{totalHoursCompleted()}</div>
    </div>
  </div>
  )
}

export default HoursCompleted
