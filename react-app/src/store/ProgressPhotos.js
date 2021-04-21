const GET_PROGRESS_PHOTOS = 'getProgressPhotos'

////////////////ACTION////////////////////
const allProgressPhotos = (progressPhoto) => {


  return {
    type: GET_PROGRESS_PHOTOS,
    progressPhoto,
  }
}
////////////////ACTION////////////////////

////////////////ACTION-CREATOR////////////////////
 export const getProgressPhotos = () => async (dispatch) => {
   const response = await fetch('api/progress_photos/');
  const progressPhoto = await response.json();
  dispatch(allProgressPhotos(progressPhoto))
  return progressPhoto
}

export const progress_photo = ({progressPhoto}) => async (dispatch) => {

   // fetch to image route to get image url
   const formData = new FormData()
   formData.append('image', progressPhoto)
 
 // sends to amazon for file storage
   const responseImageUrl = await fetch('/api/images/',{
     method: 'POST',
     body: formData,
   })
   const photoData = await responseImageUrl.json()
   progressPhoto = photoData.url

   // add the photo to action photos
   const response = await fetch('/api/progress_photos/',{
     method:'POST',
     headers:{
       'Content-Type':'application/json',
     },
     body:JSON.stringify({
      progress_photo:progressPhoto
     })
   })
   const data = await response.json()
  return data
  
}
////////////////ACTION-CREATOR////////////////////

////////////////REDUCER////////////////////
const initialState = {};
export default function progressPhotoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROGRESS_PHOTOS:
      return {
        ...state,
        ...action.progressPhoto,
      };


    default:
      return state;
  }
}
////////////////REDUCER////////////////////