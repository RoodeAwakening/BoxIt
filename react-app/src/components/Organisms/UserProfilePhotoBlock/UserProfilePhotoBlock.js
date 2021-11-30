import React from "react";
import UserStats from "../../Molecules/UserStats/UserStats";

import styles from "./UserProfilePhotoBlock.module.css";

function UserProfilePhotoBlock({ profilePhoto, userName }) {
  return (
    <div className={styles.UserProfilePhotoBlock_container}>
      <div>
        <img src={profilePhoto} />
      </div>
      <div className={styles.UserProfilePhotoBlock_container__username}>
        <h2>{userName}</h2>
      </div>
      <div className={styles.UserProfilePhotoBlock_container__mobile_block}>
        <UserStats />
      </div>
    </div>
  );
}

export default UserProfilePhotoBlock;
