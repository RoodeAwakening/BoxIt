import React, { useState, useEffect } from "react";


import styles from './WorkoutVideo.module.css'

function WorkoutVideo({video, onEnd}) {


  return (
<div className={styles.workoutVideo_container}>
  <video src={video} autoPlay onEnded={onEnd}/>
  {/* <video src={workouts[pos]?.audio_url} autoPlay onEnded={() => logWorkout(workouts[pos].id)}/> */}
</div>
  )
}

export default WorkoutVideo
