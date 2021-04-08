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
  let workout = [];
  // join the stock workout along with the user workout

  for (let i = 0; i < workouts.length; i++) {
    const el = workouts[i];
    const stockResponse = await fetch(`/api/workouts/${el.stock_workouts_id}`);
    const stockWorkouts = await stockResponse.json();
    const  x = { ...el, ...stockWorkouts };
    workout.push(x);
  }
  console.log('el---',workout);

  dispatch(getUserWorkout(workout));
  return workout;
};

//Reducer
const initialState = {};
export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_WORKOUT:
      const workouts = {};
      action.userWorkout.forEach((workout, index) => {
        workouts[index] = workout;
      });
      return {
        ...workouts,
        ...state,
      };
    default:
      return state;
  }
}
