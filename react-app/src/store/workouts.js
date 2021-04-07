const GET_ALL_WORKOUTS = "getAllWorkouts";

//ACTION

const getAllWorkouts = (allWorkouts) => {
  return {
    type: GET_ALL_WORKOUTS,
    allWorkouts,
  };
};

//Thunk Action Creator

// get all workouts
export const allWorkouts = () => async (dispatch) => {
  const response = await fetch("/api/workouts/");
  const workouts = await response.json();

  dispatch(getAllWorkouts(workouts));
  return workouts;
};

// add workout
export const addNewWorkout = (workoutObject) => async (dispatch) => {
  const { workoutId, favorited, sessionUserWorkouts } = workoutObject;
  // add to the users_workouts table
  const response = await fetch(`/api/workouts/user_workouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      workout: {
        stock_workouts_id: workoutId,
        favorited: favorited,
        progress_completed: true,
      },
    }),
  });
  const data1 = await response.json();

  // update the total user workouts completed on the user table
  let newTotalWorkouts = sessionUserWorkouts + 1  ;
 
  const responseAdd = await fetch(
    `/api/workouts/user_workouts/completed/user`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        new_workout: newTotalWorkouts,
      }),
    }
    );

  const data2 = await responseAdd.json();
};

//Reducer
const initialState = {};
export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_WORKOUTS:
      const allWorkouts = {};
      action.allWorkouts.stock_workouts.forEach((workouts) => {
        allWorkouts[workouts.id] = workouts;
      });
      return {
        ...state,
        ...allWorkouts,
      };

    default:
      return state;
  }
}
