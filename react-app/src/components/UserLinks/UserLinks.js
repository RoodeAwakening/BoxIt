import React from "react";
import { useSelector } from "react-redux";

import "./UserLinks.css";

export default function UserLinks(){
  return (
    <div className='links-group '> 

      <a className='links-each' href='/'>Start a new workout</a> 

      <a className='links-each' href='/'>Groups</a> 
      <a className='links-each' href='/'>Favorite Workouts</a> 
      <a className='links-each' href='/'>Progress Photos</a> 
      <a className='links-each' href='/'>Action Shots</a> 


      </div>
  )
}