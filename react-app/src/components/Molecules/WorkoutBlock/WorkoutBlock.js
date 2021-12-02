import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WorkoutVideo from '../../Atoms/WorkoutVideo/WorkoutVideo'

import { allWorkouts } from '../../../store/workouts';

import styes from './WorkoutBlock.module.css'

function WorkoutBlock() {
  const workouts = useSelector((state) => state.workout);
  console.log('workouts',workouts);
  const dispatch = useDispatch();




  useEffect( () => {

    dispatch(allWorkouts());

  }, []);

  const logWorkout = () =>{
    return null
  }


  return (
    <div>
      <WorkoutVideo video={workouts[2]?.audio_url} onEnd={logWorkout(workouts[2])}/>
      
    </div>
  )
}

export default WorkoutBlock
