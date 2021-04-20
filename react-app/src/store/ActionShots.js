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

export const newPhoto = ({actionPhoto}) => async (dispatch) => {

   // fetch to image route to get image url
   const formData = new FormData()
   formData.append('image', actionPhoto)
 
 // sends to amazon for file storage
   const responseImageUrl = await fetch('/api/images/',{
     method: 'POST',
     body: formData,
   })
   const photoData = await responseImageUrl.json()
   actionPhoto = photoData.url

   // add the photo to action photos
   const response = await fetch('/api/action_shots/',{
     method:'POST',
     headers:{
       'Content-Type':'application/json',
     },
     body:JSON.stringify({
       action_shot_post:actionPhoto
     })
   })
   const data = await response.json()
   console.log('data',data);
  
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