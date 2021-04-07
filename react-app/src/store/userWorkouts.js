const GET_USER_WORKOUT = "setUserWorkout";



const getUserWorkout = (userWorkout) => {
  return {
    type: GET_USER_WORKOUT,
    userWorkout,
  };
};

//get a users total workouts
export const userWorkouts = () => async (dispatch) => {
  const response = await fetch("/api/workouts/user_workouts");
  const workouts = await response.json();
  
  dispatch(getUserWorkout(workouts));
  return workouts;
};


//Reducer
const initialState = {};
export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_WORKOUT:

      const workouts = {};
      action.userWorkout.forEach((workout) => {
        workouts[workout.id] = workout;
      });
      return {
        ...workouts,
        ...state,
      };
      default:
        return state;
    }
  }