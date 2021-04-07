const GET_ALL_WORKOUT_COMPLETED = "getAllWorkoutCompleted";

//ACTION
const getAllWorkoutCompleted = (allCompletedWorkouts) => {
  return {
    type: GET_ALL_WORKOUT_COMPLETED,
    allCompletedWorkouts,
  };
};

//Thunk Action Creator
// all user workouts and the id
export const allWorkoutsComplete = () => async (dispatch) => {
  const response = await fetch("/api/workouts/user_workouts/completed");
  const completedWorkouts = await response.json();

  dispatch(getAllWorkoutCompleted(completedWorkouts));
  return completedWorkouts;
};

//Reducer
const initialState = {};
export default function rankingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_WORKOUT_COMPLETED:
      const totalCompleted = [];
      const completed = action.allCompletedWorkouts.all_completed_workouts;
      for (let i = 0; i < completed.length; i++) {
        const x = completed[i] ;
        if (x.workouts === null) {
          x.workouts = 0
        }
  
      
        totalCompleted.push(x);
      }



      return {
        ...state,
        ...totalCompleted,
      };

    default:
      return state;
  }
}
