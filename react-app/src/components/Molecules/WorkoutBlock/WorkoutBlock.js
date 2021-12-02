import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutVideo from "../../Atoms/WorkoutVideo/WorkoutVideo";

import { allWorkouts } from "../../../store/workouts";

import styes from "./WorkoutBlock.module.css";

function WorkoutBlock({ workout }) {
  const workouts = useSelector((state) => state.workout);
  console.log("workouts", workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allWorkouts());
  }, []);

  // get random video to play
  const workoutVideo = () => {
    let num = 0;
    for (let each in workouts) {
      num += 1;
    }
    // get a random workout
    let random = Math.floor(Math.random() * num + 1);

    let randomWorkout = workouts[random];

    return (
      <div>
        <WorkoutVideo
          video={randomWorkout?.audio_url}
          onEnd={logWorkout(workouts[2])}
        />
      </div>
    );
  };

  const logWorkout = () => {
    return null;
  };

  return <div>{workouts ? workoutVideo() : "loading..."}</div>;
}

export default WorkoutBlock;
