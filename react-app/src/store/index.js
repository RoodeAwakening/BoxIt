import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import sessionReducer from './session'
import workoutReducer from './workouts'
import rankingReducer from './ranking'
import userGroupReducer from './userGroups'
import userWorkoutsReducer from './userWorkouts'
import groupsReducer from './groups'
////

// split the appReducer and combined reducers to set initial state to undefined 
const appReducer = combineReducers({
  /* your app’s top-level reducers */
	session: sessionReducer,
	workout: workoutReducer,
	ranking: rankingReducer,
	userGroup: userGroupReducer,
	userWorkouts: userWorkoutsReducer,
	groups: groupsReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'removeUser') {
    state = undefined;
  }

  return appReducer(state, action);
};


////
// const rootReducer = combineReducers({
	// session: sessionReducer,
	// workout: workoutReducer,
	// ranking: rankingReducer,
	// userGroup: userGroupReducer,
	// userWorkouts: userWorkoutsReducer,

// 	// add more reducers here
// })

let enhancer

if (process.env.NODE_ENV === 'production') {
	enhancer = applyMiddleware(thunk)
} else {
	const logger = require('redux-logger').default
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = preloadedState => {
	return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore
