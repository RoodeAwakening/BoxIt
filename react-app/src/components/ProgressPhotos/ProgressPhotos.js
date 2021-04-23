import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProgressPhotos.css";

import { progress_photo, getProgressPhotos } from "../../store/ProgressPhotos";

export default function ProgressPhotos() {
  const dispatch = useDispatch();
 const photos = useSelector((state)=> state?.progressPhoto.progress_photo)
  const [progressPhoto, setProgressPhoto] = useState("");
 

  useEffect(() => {
    dispatch(getProgressPhotos());
   }, [dispatch]);


  // add new progress photo
  const addProgressPhoto = async (e) => {
    e.preventDefault();
    const photo = await dispatch(
      progress_photo({
        progressPhoto,
      })
    );
    await dispatch(getProgressPhotos());
    return photo;
  };

  // set progress photos and render
  const updateProgressPhoto = (e) => {
    setProgressPhoto(e.target.files[0]);
  };

  const getMyProgressPhotos = () => {
    let pic = photos.map((photo, index) => {


      return (
        <div className="action_photos" key={index}>
          <img src={photo.photo_url} />
        </div>
      );
    });
    // let pic = 1
    return pic;

  };

  return (
    <div className="progress_photos__container">
      <h2> Your Progress </h2>
      <h3>Check out your progress here</h3>
      <div className="progress_photos-form-container">

        <form onSubmit={addProgressPhoto} className="actionShots-form">
          <div>
            <input
              className="progress_photos-form-photo"
              type="file"
              name="progess photo"
              onChange={updateProgressPhoto}
              required={true}
            ></input>
          </div>
          <div>
            <button type="submit">Add Your Progress Photo</button>
          </div>
        </form>
      </div>
      <div className="progress_photos-container">

        {photos ? getMyProgressPhotos() : "Add A Photo"}
      </div>
    </div>
  );
}
