import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewWorkout } from "../../store/workouts";
import { useHistory } from "react-router-dom";
import { userWorkouts } from "../../store/userWorkouts";

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

 
  const userWorkout = useSelector((state) => Object.values(state.userWorkouts));
  const sessionUserWorkouts = userWorkout.length
 
  const [favorited, setFavorited] = useState(false);


  const saveWorkout = async (e) => {
    e.preventDefault();

    const workout = await dispatch(
      addNewWorkout({
        workoutId,
        favorited,
        sessionUserWorkouts,
      }),
      );


    window.location.href = '/'
    return workout;
  };

  const closeWorkoutModal = (e) => {
    setWorkoutModalisOpen(false);
    history.push("/");
  };

  const updateFavorite = (e) => {
    if (favorited == false) {
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
      <div>
        <h2>How was your workout?</h2>
      </div>
      <div className="workout_modal-container">
        <form onSubmit={saveWorkout} className="login-form">
          <div className="saveworkout">
            <label>Add To Favorites</label>

            <input
              name="favorite"
              type="checkbox"
              placeholder="favorite"
              // value="true"
              onChange={updateFavorite}
            />
          </div>
          <div className="rate-container">
            <div className="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">
                5 stars
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">
                4 stars
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">
                3 stars
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">
                2 stars
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
          </div>

          <div>
            <button type="submit">Save Workout</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
