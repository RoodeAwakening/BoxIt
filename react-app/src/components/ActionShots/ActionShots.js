import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ActionShots.css";

//Store Stuff
import { getAllActionShots } from "../../store/ActionShots";


function ActionShots() {
  const dispatch = useDispatch();
  const pictures = useSelector((state)=>(state.actionShots.action_shots))
  console.log(pictures);

  useEffect(() => {
    dispatch(getAllActionShots());
  }, [dispatch]);

  //get each action shot
  // const actionShots = () => {

  //   return <img src="" />;
  // };

  return (
    <div className="actionShots-container">
      <h2>Action Shots</h2>
      <div></div>
    </div>
  );
}

export default ActionShots;
