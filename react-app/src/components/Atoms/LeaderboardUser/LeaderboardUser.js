import React from "react";
import UserPicture from "../UserPicture/UserPicture";
import styles from "./LeaderboardUser.module.css";

function LeaderboardUser({
  position,
  profile_photo,
  userName,
  workoutsComplete,
}) {
  return (
    <div className={styles.LeaderboardUser_container}>
 
      <div>
        <h2>{`#${position}`}</h2>
      </div>


      <div className={styles.LeaderboardUser_container__image}>
        <UserPicture photo={profile_photo}/>
        {/* <img src={profile_photo} /> */}
      </div>


      <div className={styles.LeaderboardUser_container__userName}>
        <h3>{userName}</h3>
      </div>


      <div>
        <h3>{workoutsComplete}</h3>
      </div>

      
    </div>
  );
}

export default LeaderboardUser;
