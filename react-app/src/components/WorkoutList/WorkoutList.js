import React, { useState, useEffect } from "react";
import "./WorkoutList.css";
import { useSelector, useDispatch } from "react-redux";
import { userWorkouts } from "../../store/userWorkouts";

const WorkoutsList = () => {
  const dispatch = useDispatch();
  const userWorkout = useSelector((state) =>
    Object.values(state?.userWorkouts)
  );

  const allUserGroups = useSelector((state) => Object.values(state?.userGroup));

  useEffect(() => {
    dispatch(userWorkouts());
  }, [dispatch]);

  return (
    <>
      {userWorkout && (
        <div>
          {userWorkout.map((each, index) => (
            <div key={index}>
              <div>
                <h4>Workout Date</h4>
                <img src ={each.coach_photo_url} className='workoutList-coach-photo'/>
              </div>
              <div>
                <h4>Workout Date -{each.createdAt}</h4>
              </div>
              <div>
                <h4>Workout # -{each.stock_workouts_id}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WorkoutsList;
