import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './Rank.module.css'

function Rank() {
  const sessionUser = useSelector((state) => state.session.user);
  const allWorkoutsCompleted = useSelector((state) =>
  Object.values(state.ranking)
  );

    //get overall rank
    const overallRank = () => {
      let place = 0;
      // set place to i plus one when i find the user
      for (let i = 0; i < allWorkoutsCompleted.length; i++) {
        const el = allWorkoutsCompleted[i];
        if (el.user_id === sessionUser.id) {
          place = i + 1;
        }
      }
  
      return <h3> <span className={styles.Rank_container__heading}>#</span> 
      <span>{place}</span></h3>;
    };



  return (
    <div className={styles.Rank_container}>
    <div>
      <i className="fas fa-trophy"></i>
    </div>
    <div className={styles.Rank_container__heading}>
      <h3>Current Rank</h3>
    </div>
    <div>
      <div>{overallRank()}</div>
    </div>
  </div>
  )
}

export default Rank
