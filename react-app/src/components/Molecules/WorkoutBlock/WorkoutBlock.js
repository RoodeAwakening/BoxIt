import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import WorkoutVideo from "../../Atoms/WorkoutVideo/WorkoutVideo";

import { allWorkouts } from "../../../store/workouts";

import styles from "./WorkoutBlock.module.css";
import UserPicture from "../../Atoms/UserPicture/UserPicture";
import WorkoutModal from "../../WorkoutModal/WorkoutModal";

function WorkoutBlock({ workout }) {
  const workouts = useSelector((state) => state.workout);
  const sessionUser = useSelector((state) => state.session.user);
  const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);
  const [workoutId, setWorkoutId] = useState(0);
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

    const logWorkout = (id) => {
         setWorkoutId(id)
    setWorkoutModalIsOpen(true)
    };

    return (
      <div className={styles.workoutBlock_container}>
        <div className={styles.workoutBlock_container__video}>
          <WorkoutVideo
            video={randomWorkout?.audio_url}
            onEnd={()=>(logWorkout(randomWorkout.id))}
          />
        </div>
        <div className={styles.workoutBlock_userPicture__container}>
          <h1>Your coach</h1>
          <UserPicture photo={randomWorkout?.coach_photo_url} />
        </div>
      </div>
    );
  };

  if (!sessionUser) {
    return <Redirect to="/welcome" />;
  }
  return(
    <>

  <div>{workouts ? workoutVideo() : "loading..."}</div>
  <WorkoutModal
    workoutModalIsOpen={workoutModalIsOpen}
    setWorkoutModalisOpen={setWorkoutModalIsOpen}
    workoutId={workoutId}
    />
  </>
  )
  ;
}

export default WorkoutBlock;
