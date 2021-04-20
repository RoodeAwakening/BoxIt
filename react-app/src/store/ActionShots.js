const GET_ACTION_SHOTS = 'getActionShots'

////////////////ACTION////////////////////
const allActionShots = (actionShots) => {


  return {
    type: GET_ACTION_SHOTS,
    actionShots,
  }
}
////////////////ACTION////////////////////

////////////////ACTION-CREATOR////////////////////
export const getAllActionShots = () => async (dispatch) => {
  const response = await fetch('api/action_shots/')
  const actionShots = await response.json()
  dispatch(allActionShots(actionShots))
  return actionShots
}
////////////////ACTION-CREATOR////////////////////


////////////////REDUCER////////////////////
const initialState = {};
export default function actionShotReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTION_SHOTS:
      return {
        ...state,
        ...action.actionShots,
      };


    default:
      return state;
  }
}
////////////////REDUCER////////////////////