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
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(userWorkouts());
  }, [dispatch]);

  const playWorkout = ()=>{
    return alert ('Workout')
  }

  return (
    <>
      {userWorkout && (
        <div className='WorkoutList-container' >
          {userWorkout.map((each, index) => (
            <div key={index} className='WorkoutList-each'>
              
              <div className='WorkoutList-each-background'>
                <img src={each.coach_photo_url} />
              </div>
           
            
              <div>
                <h4>Workout Date</h4><h4>{each.createdAt}</h4>
              </div>
              <div>
                <h4>Your Coach</h4>
                <img src ={each.coach_photo_url} className='workoutList-coach-photo'/>
              </div>
              <div>
                <h4>Workout # -{each.stock_workouts_id}</h4>
              </div>

              <div>
                <h4>Workout Favorited</h4><h4>{each.favorited? "True": "False"}</h4>
              </div>
           
            
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WorkoutsList;
