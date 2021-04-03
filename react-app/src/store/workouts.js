import { loginThunk } from "./session";

const GET_USER_WORKOUT = "setUserWorkout";
const GET_ALL_WORKOUT_COMPLETED = "getAllWorkoutCompleted";

//ACTION
const getUserWorkout = (userWorkout) => {
  console.log('userWorkout',userWorkout);
  return {
    type: GET_USER_WORKOUT,
    userWorkout,
  };
};

const getAllWorkoutCompleted = (allCompletedWorkouts) => {
  console.log('allCompletedWorkouts',allCompletedWorkouts);
  return {
    type: GET_ALL_WORKOUT_COMPLETED,

    allCompletedWorkouts,
  };
};

//Thunk Action Creator
export const userWorkouts = () => async (dispatch) => {
  const response = await fetch("/api/workouts/user_workouts");
  const workouts = await response.json();

  dispatch(getUserWorkout(workouts));
  return workouts;
};

export const allWorkoutsComplete = () => async (dispatch) => {
  const response = await fetch("/api/workouts/user_workouts/completed");
  const completedWorkouts = await response.json();
  dispatch(getAllWorkoutCompleted(completedWorkouts));
  return completedWorkouts;
};

//Reducer
const initialState = {};
export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_WORKOUT:
      const workouts = {};
      action.userWorkout.user_workouts.forEach((workout) => {
        workouts[workout.id] = workout;
      });
      return {
        ...state,
        ...workouts,
      };
    // case (GET_ALL_WORKOUT_COMPLETED):
    //   const total = {};
    //   action.allCompletedWorkouts.workout_totals.forEach((workout)=>{
    //     total[workout]
    //   })
      
    default:
      return state;
  }
}
