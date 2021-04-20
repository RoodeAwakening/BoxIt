import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ActionShots.css";

//Store Stuff
import { getAllActionShots } from "../../store/ActionShots";


function ActionShots() {
  const dispatch = useDispatch();
  const pictures = useSelector((state)=>(state?.actionShots.action_shots))
  console.log(pictures);
  
  useEffect(() => {
    dispatch(getAllActionShots());
  }, [dispatch]);
  
  // get each action shot
  const actionShots = () => {
    let pic = pictures.map((picture, index) => {
      console.log(picture.photo_url);
      
      return (
        <div className='action_photos' key={index}>

        <img src={picture.photo_url}/>
        </div>
      );
    })
return (pic)
  };

  return (
    <div className="actionShots-container">
      <h2>Action Shots</h2>
      <div className='action_photos-container'>{pictures ? actionShots(): "Loading"}</div>
    </div>
  );
}

export default ActionShots;
