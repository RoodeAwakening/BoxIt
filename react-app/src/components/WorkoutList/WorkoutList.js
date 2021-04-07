import React, { useState, useEffect } from "react";
import "./WorkoutList.css";
import { useSelector, useDispatch } from "react-redux";
import { userWorkouts } from "../../store/userWorkouts";


const WorkoutsList = () => {
  const dispatch = useDispatch();
  const userWorkout = useSelector((state) => Object.values(state.userWorkouts));

  const allUserGroups = useSelector((state) => Object.values(state.userGroup));



  useEffect(() => {
    dispatch(userWorkouts());
  }, [dispatch]);

  return (
    <>
      {userWorkout && (
        <div >
          {userWorkout.map((each) => (
            <div key={each.id}>
              <h4>
              Workout Id -
              {each.stock_workouts_id}
              </h4>
              </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WorkoutsList;
