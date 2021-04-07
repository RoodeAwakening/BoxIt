

const GET_USER_WORKOUT = "setUserWorkout";
const GET_ALL_WORKOUTS = 'getAllWorkouts'
const ADD_WORKOUT = 'addWorkout'


//ACTION
const getUserWorkout = (userWorkout) => {
  return {
    type: GET_USER_WORKOUT,
    userWorkout,
  };
};


const getAllWorkouts = (allWorkouts) => {

  return {
    type: GET_ALL_WORKOUTS,
    allWorkouts
  }
}

const addWorkout = (id) =>{
  return {
    type:ADD_WORKOUT,
    id
  }
}




//Thunk Action Creator
//get a users total workouts
export const userWorkouts = () => async (dispatch) => {
  const response = await fetch("/api/workouts/user_workouts");
  const workouts = await response.json();

  dispatch(getUserWorkout(workouts));
  return workouts;
};


// get all workouts
export const allWorkouts = () => async (dispatch) => {
  const response = await fetch('/api/workouts/')
  const workouts = await response.json()

  dispatch(getAllWorkouts(workouts))
  return workouts
}

// add workout
export const addNewWorkout = workoutObject => async dispatch => {
  const {workoutId, favorited} = workoutObject

  const response = await fetch(`/api/workouts/user_workouts`,{
    method: 'POST',
    headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify({
	    workout: {
        stock_workouts_id: workoutId,
        favorited: favorited,
        progress_completed: true
    }
  }),
})
  const data = await response.json()

}



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
        userWorkouts:workouts
      };
    case GET_ALL_WORKOUTS:
      const allWorkouts = {}
      action.allWorkouts.stock_workouts.forEach((workouts)=>{
        allWorkouts[workouts.id] = workouts
      })
      return {
        ...state,
        workouts:allWorkouts
        ,
      }

    default:
      return state;
  }
}
