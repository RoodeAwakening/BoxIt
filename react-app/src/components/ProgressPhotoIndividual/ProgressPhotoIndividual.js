import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import "./ProgressPhotoIndividual.css";

import {
  getProgressPhotos,
  removeProgressPhoto,
  getSingleProgressPhoto,
} from "../../store/ProgressPhotos";





export default function ProgressPhotoIndividual() {
  const [errors, setErrors] = useState([]);
  const [photo, setPhoto] = useState("")
  let history = useHistory()
const dispatch = useDispatch()
const params = useParams()
console.log('myPhoto',params.photoId);



useEffect(async ()=>{
  let myPhoto = await dispatch(getSingleProgressPhoto(params.photoId))
  setPhoto(myPhoto.single_progress_photo[0])
},[])

  
  const deleteProgressPhoto = async () => {
    await dispatch(removeProgressPhoto(photo.id));
    await dispatch(getProgressPhotos());
    history.push("/my_progress");
  };



  return (


      <div className="login-container">
        <img src={photo.photo_url}></img>
        <h1>Would you like to remove this photo?</h1>
        <form onSubmit={deleteProgressPhoto} className="login-form">
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <div>
              <button>Cancel</button>
            </div>
            <div>
              <button type="submit">Delete</button>
            </div>
          </div>
        </form>
      </div>
  
  );
}
