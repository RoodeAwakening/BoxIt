import React, { useState } from "react";
import * as sessionActions from "../../store/workouts";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import "./WorkoutModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function WorkoutModal({
  workoutModalIsOpen,
  setWorkoutModalisOpen,
  workoutId,
}) {
  const dispatch = useDispatch();
  let history = useHistory();

  const [favorited, setFavorited] = useState(false);


  const saveWorkout = async (e) => {
    e.preventDefault();

    const workout = await dispatch(
      sessionActions.addNewWorkout({ workoutId, favorited })
    );

    history.push("/");

    return workout;
  };

  const closeWorkoutModal = (e) => {
    setWorkoutModalisOpen(false);
  };

  const updateFavorite = (e) => {
    if (favorited === false) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  };

  return (
    <Modal isOpen={workoutModalIsOpen} style={customStyles}>
      <div>
        <button onClick={closeWorkoutModal}>
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div className="workout_modal-container">
        <form onSubmit={saveWorkout} className="login-form">
          <div>
            <input
              name="favorite"
              type="checkbox"
              placeholder="favorite"
              value="true"
              onChange={updateFavorite}
            />
          </div>
          <div></div>

          <div>
            <button type="submit">Save Workout</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
