import React from "react";
import UserStats from "../../Molecules/UserStats/UserStats";
import TotalWorkouts from "../TotalWorkouts/TotalWorkouts";
import styles from "./UserProfilePhotoBlock.module.css";

function UserProfilePhotoBlock({profilePhoto, userName}) {
  return (
    <div className={styles.UserProfilePhotoBlock_container}>
      <div>
        <img src={profilePhoto} />
      </div>
      <div className={styles.UserProfilePhotoBlock_container__username}>
        <h2>{userName}</h2>
      </div>
      <div className={styles.UserProfilePhotoBlock_container__mobile_block}>
<ul>

        <li><UserStats/></li>
        <li><TotalWorkouts/></li>
        <li><TotalWorkouts/></li>
        <li><TotalWorkouts/></li>
        
</ul>
      </div>
 
    </div>
  );
}

export default UserProfilePhotoBlock;
